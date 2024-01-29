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
  static std::atomic<int> newId;
  static std::atomic<int> counter;
  std::atomic<int> currentId;
  AndroidUIScheduler* androidUiScheduler_;
  std::atomic<bool> isActive = true;

 public:
  explicit UISchedulerWrapper(AndroidUIScheduler* androidUiScheduler)
      : androidUiScheduler_(androidUiScheduler) {
    currentId = ++newId;
    counter++;
    if (counter > 1) {
      int a = 9;
      (void)a;
    }
  }

  void scheduleOnUI(std::function<void()> job) override {
    if (!isActive) {
      return;
    }
    if (currentId != newId) {
      return;
    }
    if (AndroidUIScheduler::counter == 0) {
      return;
    }
    UIScheduler::scheduleOnUI(job);
    if (!scheduledOnUI_) {
      scheduledOnUI_ = true;
      androidUiScheduler_->scheduleTriggerOnUI();
    }
  }

  ~UISchedulerWrapper() {
    counter--;
  }
};

std::atomic<int> UISchedulerWrapper::newId = 0;
std::atomic<int> UISchedulerWrapper::counter = 0;

std::atomic<int> AndroidUIScheduler::newId = 0;
std::atomic<int> AndroidUIScheduler::counter = 0;

AndroidUIScheduler::AndroidUIScheduler(
    jni::alias_ref<AndroidUIScheduler::javaobject> jThis)
    : javaPart_(jni::make_global(jThis)),
      uiScheduler_(
          std::make_shared<UISchedulerWrapper>(this)) {
  currentId = ++newId;
  counter++;
  if (counter > 1) {
    int a = 9;
    (void)a;
  }
}

AndroidUIScheduler::~AndroidUIScheduler() {
  std::lock_guard<std::mutex> lock(mutex_);
  counter--;
  reinterpret_cast<UISchedulerWrapper*>(uiScheduler_.get())->isActive = false;
}

jni::local_ref<AndroidUIScheduler::jhybriddata> AndroidUIScheduler::initHybrid(
    jni::alias_ref<jhybridobject> jThis) {
  return makeCxxInstance(jThis);
}

void AndroidUIScheduler::triggerUI() {
  std::lock_guard<std::mutex> lock(mutex_);
  if (currentId != newId) {
    return;
  }
  if (UISchedulerWrapper::counter == 0) {
    return;
  }
  if (counter == 0) {
    return;
  }
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
