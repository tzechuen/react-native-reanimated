package com.swmansion.reanimated.keyboardObserver;

import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.View;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsAnimationCompat;
import androidx.core.view.WindowInsetsCompat;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.PixelUtil;
import com.swmansion.reanimated.BuildConfig;
import com.swmansion.reanimated.nativeProxy.KeyboardEventDataUpdater;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.List;

public class ReanimatedKeyboardEventListener {
  enum KeyboardState {
    UNKNOWN(0),
    OPENING(1),
    OPEN(2),
    CLOSING(3),
    CLOSED(4);

    private final int value;

    KeyboardState(int value) {
      this.value = value;
    }

    public int asInt() {
      return value;
    }
  }

  private final WeakReference<ReactApplicationContext> reactContext;
  private int nextListenerId = 0;
  private KeyboardState state;
  private final HashMap<Integer, KeyboardEventDataUpdater> listeners = new HashMap<>();
  private boolean isStatusBarTranslucent = false;
  private int staredTransitionCounter = 0;

  public ReanimatedKeyboardEventListener(WeakReference<ReactApplicationContext> reactContext) {
    this.reactContext = reactContext;
  }

  private View getRootView() {
    return reactContext.get().getCurrentActivity().getWindow().getDecorView();
  }

  private void setupWindowInsets() {
    View rootView = getRootView();
    WindowCompat.setDecorFitsSystemWindows(
        reactContext.get().getCurrentActivity().getWindow(), false);
    ViewCompat.setOnApplyWindowInsetsListener(rootView, this::onApplyWindowInsets);
  }

  private WindowInsetsCompat onApplyWindowInsets(View view, WindowInsetsCompat insets) {
    if (android.os.Build.VERSION.SDK_INT < Build.VERSION_CODES.R) {
      return insets;
    }
    View rootView = getRootView();
    if (state == KeyboardState.OPEN) {
      int keyboardHeight =
              (int)
                      PixelUtil.toDIPFromPixel(
                              Math.max(
                                      0,
                                      insets.getInsets(WindowInsetsCompat.Type.ime()).bottom
                                              - insets.getInsets(WindowInsetsCompat.Type.systemBars()).bottom));

      updateKeyboard(keyboardHeight);
    }
    int paddingBottom = 0;
    if (!BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            && BuildConfig.REACT_NATIVE_MINOR_VERSION < 70) {
      paddingBottom = insets.getInsets(WindowInsetsCompat.Type.navigationBars()).bottom;
    }
    int paddingTop = insets.getInsets(WindowInsetsCompat.Type.systemBars()).top;
    View content =
            rootView.getRootView().findViewById(androidx.appcompat.R.id.action_bar_root);

    int matchParentFlag = FrameLayout.LayoutParams.MATCH_PARENT;
    FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(matchParentFlag, matchParentFlag);
    if (isStatusBarTranslucent) {
      params.setMargins(0, 0, 0, 0);
    } else {
      params.setMargins(0, paddingTop, 0, paddingBottom);
    }
    content.setLayoutParams(params);
    return insets;
  }

  private void updateKeyboard(int keyboardHeight) {
    for (KeyboardEventDataUpdater listener : listeners.values()) {
      listener.keyboardEventDataUpdater(state.asInt(), keyboardHeight);
    }
  }

//  private void app

  private class WindowInsetsCallback extends WindowInsetsAnimationCompat.Callback {
    private int keyboardHeight = 0;

    public WindowInsetsCallback() {
      super(WindowInsetsAnimationCompat.Callback.DISPATCH_MODE_CONTINUE_ON_SUBTREE);
    }

    private boolean isKeyboardAnimation(@NonNull WindowInsetsAnimationCompat animation) {
      return (animation.getTypeMask() & WindowInsetsCompat.Type.ime()) != 0;
    }

    @NonNull
    @Override
    public WindowInsetsAnimationCompat.BoundsCompat onStart(
        @NonNull WindowInsetsAnimationCompat animation,
        @NonNull WindowInsetsAnimationCompat.BoundsCompat bounds) {
      if (!isKeyboardAnimation(animation)) {
        return bounds;
      }
      if (staredTransitionCounter > 0) {
        state = state == KeyboardState.OPENING ? KeyboardState.CLOSING : KeyboardState.OPENING;
      } else {
        state = keyboardHeight == 0 ? KeyboardState.OPENING : KeyboardState.CLOSING;
      }
      staredTransitionCounter++;
      updateKeyboard(keyboardHeight);
      return super.onStart(animation, bounds);
    }

    @NonNull
    @Override
    public WindowInsetsCompat onProgress(
        @NonNull WindowInsetsCompat insets,
        @NonNull List<WindowInsetsAnimationCompat> runningAnimations) {
      boolean isAnyKeyboardAnimation = false;
      for (WindowInsetsAnimationCompat animation : runningAnimations) {
        if (isKeyboardAnimation(animation)) {
          isAnyKeyboardAnimation = true;
          break;
        }
      }
      if (!isAnyKeyboardAnimation) {
        return insets;
      }
      int windowInsetsType = WindowInsetsCompat.Type.ime();
      int bottomWindowInset = insets.getInsets(windowInsetsType).bottom;
      int systemBarsInsetsType = WindowInsetsCompat.Type.systemBars();
      int statusBar = insets.getInsets(systemBarsInsetsType).bottom;
      boolean hasNavigationBar = KeyCharacterMap.deviceHasKey(KeyEvent.KEYCODE_HOME);
      int keyboardHeightDip = hasNavigationBar ? bottomWindowInset - statusBar : bottomWindowInset;
      keyboardHeight = (int) PixelUtil.toDIPFromPixel(Math.max(0, keyboardHeightDip));
      updateKeyboard(keyboardHeight);
      return insets;
    }

    @Override
    public void onEnd(@NonNull WindowInsetsAnimationCompat animation) {
      if (!isKeyboardAnimation(animation)) {
        return;
      }
      staredTransitionCounter--;
      if (staredTransitionCounter == 0) {
        state = keyboardHeight == 0 ? KeyboardState.CLOSED : KeyboardState.OPEN;
      }
      updateKeyboard(keyboardHeight);
    }
  }

  private void setUpCallbacks() {
    View rootView = getRootView();
    new Handler(Looper.getMainLooper()).post(this::setupWindowInsets);
    ViewCompat.setWindowInsetsAnimationCallback(rootView, new WindowInsetsCallback());
  }

  public int subscribeForKeyboardEvents(
      KeyboardEventDataUpdater updater, boolean isStatusBarTranslucent) {
    int listenerId = nextListenerId++;
    if (listeners.isEmpty()) {
      this.isStatusBarTranslucent = isStatusBarTranslucent;
      setUpCallbacks();
    }
    listeners.put(listenerId, updater);
    return listenerId;
  }

  private void bringBackWindowInsets() {
    WindowCompat.setDecorFitsSystemWindows(
        reactContext.get().getCurrentActivity().getWindow(), !isStatusBarTranslucent);
    ViewCompat.setOnApplyWindowInsetsListener(getRootView(), null);
    ViewCompat.setWindowInsetsAnimationCallback(getRootView(), null);
    View content =
        getRootView().getRootView().findViewById(androidx.appcompat.R.id.action_bar_root);

    FrameLayout.LayoutParams params =
        new FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT);
    params.setMargins(0, 0, 0, 0);
    content.setLayoutParams(params);
  }

  private void removeCallbacks() {
    View rootView = getRootView();
    new Handler(Looper.getMainLooper()).post(this::bringBackWindowInsets);
    ViewCompat.setWindowInsetsAnimationCallback(rootView, null);
  }

  public void unsubscribeFromKeyboardEvents(int listenerId) {
    listeners.remove(listenerId);
    if (listeners.isEmpty()) {
      removeCallbacks();
    }
  }
}
