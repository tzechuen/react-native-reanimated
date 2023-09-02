#pragma once

#include <ReactCommon/CallInvoker.h>

#include <Reanimated/ThreadSafeQueue.h>

#include <memory>

namespace reanimated {

class UIScheduler {
 public:
  virtual void scheduleOnUI(std::function<void()> job);
  virtual void triggerUI();
  virtual ~UIScheduler() = default;

 protected:
  std::atomic<bool> scheduledOnUI_{false};
  ThreadSafeQueue<std::function<void()>> uiJobs_;
};

} // namespace reanimated
