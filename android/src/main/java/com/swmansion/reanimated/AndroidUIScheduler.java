
package com.swmansion.reanimated;

import android.util.Log;

import com.facebook.jni.HybridData;
import com.facebook.proguard.annotations.DoNotStrip;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;

public class AndroidUIScheduler {

  @DoNotStrip
  @SuppressWarnings("unused")
  private final HybridData mHybridData;

  private final ReactApplicationContext mContext;
  private final AtomicBoolean mActive = new AtomicBoolean(true);

    private static AtomicInteger counter = new AtomicInteger(0);
    private AtomicBoolean isDestroyed = new AtomicBoolean(false);

  private final Runnable mUIThreadRunnable =
      new Runnable() {
        @Override
        public void run() {
            if (counter.get() == 0 || mActive.get() == false || isDestroyed.get() == true) {
                Log.v("a", "a");
            }
          if (mActive.get()) {
            triggerUI();
          }
        }
      };

  public AndroidUIScheduler(ReactApplicationContext context) {
      counter.getAndIncrement();
      if (counter.get() > 1) {
          Log.v("a", "a");
      }
    mHybridData = initHybrid();
    mContext = context;
  }

  private native HybridData initHybrid();

  public native void triggerUI();

  @DoNotStrip
  private void scheduleTriggerOnUI() {
    UiThreadUtil.runOnUiThread(
        new GuardedRunnable(mContext.getExceptionHandler()) {
          public void runGuarded() {
            mUIThreadRunnable.run();
          }
        });
  }

  public void deactivate() {
      counter.getAndDecrement();
      if (counter.get() > 0) {
          Log.v("a", "a");
      }
      if (isDestroyed.get()) {
          return;
      }
      isDestroyed.set(true);
    mActive.set(false);
    mHybridData.resetNative();
  }
}
