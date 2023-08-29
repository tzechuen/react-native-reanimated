package com.swmansion.reanimated.nativeProxy;

import androidx.annotation.Nullable;
import com.facebook.jni.HybridData;
import com.facebook.proguard.annotations.DoNotStrip;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.concurrent.atomic.AtomicBoolean;

@DoNotStrip
public class EventHandler implements RCTEventEmitter {

  @DoNotStrip private final HybridData mHybridData;
  UIManagerModule.CustomEventNamesResolver mCustomEventNamesResolver;
  private AtomicBoolean ignoreEvent = new AtomicBoolean(false);

  @DoNotStrip
  private EventHandler(HybridData hybridData) {
    mHybridData = hybridData;
  }

  @Override
  public void receiveEvent(int emitterReactTag, String eventName, @Nullable WritableMap event) {
    if (ignoreEvent.get()) {
      return;
    }
    String resolvedEventName = mCustomEventNamesResolver.resolveCustomEventName(eventName);
    receiveEvent(resolvedEventName, emitterReactTag, event);
  }

  public native void receiveEvent(
      String eventName, int emitterReactTag, @Nullable WritableMap event);

  @Override
  public void receiveTouches(
      String eventName, WritableArray touches, WritableArray changedIndices) {
    // not interested in processing touch events this way, we process raw events only
  }

  public void setIgnoreEvent(boolean ignoreEvent) {
    this.ignoreEvent.set(ignoreEvent);
  }
}
