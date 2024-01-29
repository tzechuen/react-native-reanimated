#include "AndroidUIScheduler.h"

#include <android/log.h>
#include <fbjni/fbjni.h>
#include <jsi/jsi.h>

#include <memory>
#include <string>

namespace reanimated {

using namespace facebook;
using namespace react;

class UISchedulerWrapper : public UIScheduler {
 public:
  AndroidUIScheduler* androidUiScheduler_;
  std::atomic<bool> isActive = true;

 public:
  explicit UISchedulerWrapper(AndroidUIScheduler* androidUiScheduler)
      : androidUiScheduler_(androidUiScheduler) {}

  void scheduleOnUI(std::function<void()> job) override {
    if (!isActive) {
      return;
    }
    UIScheduler::scheduleOnUI(job);
    if (!scheduledOnUI_) {
      scheduledOnUI_ = true;
      androidUiScheduler_->scheduleTriggerOnUI();
    }
  }

  ~UISchedulerWrapper() {}
};

AndroidUIScheduler::AndroidUIScheduler(
    jni::alias_ref<AndroidUIScheduler::javaobject> jThis)
    : javaPart_(jni::make_global(jThis)),
      uiScheduler_(
          std::make_shared<UISchedulerWrapper>(this)) {}

AndroidUIScheduler::~AndroidUIScheduler() {
  std::lock_guard<std::mutex> lock(mutex_);
  reinterpret_cast<UISchedulerWrapper*>(uiScheduler_.get())->isActive = false;
}

jni::local_ref<AndroidUIScheduler::jhybriddata> AndroidUIScheduler::initHybrid(
    jni::alias_ref<jhybridobject> jThis) {
  return makeCxxInstance(jThis);
}

void AndroidUIScheduler::triggerUI() {
  std::lock_guard<std::mutex> lock(mutex_);
  uiScheduler_->triggerUI();
}

void AndroidUIScheduler::scheduleTriggerOnUI() {
  static const auto method =
      javaPart_->getClass()->getMethod<void()>("scheduleTriggerOnUI");
  method(javaPart_.get());
}

void AndroidUIScheduler::registerNatives() {
  registerHybrid({
      makeNativeMethod("initHybrid", AndroidUIScheduler::initHybrid),
      makeNativeMethod("triggerUI", AndroidUIScheduler::triggerUI),
  });
}

} // namespace reanimated
