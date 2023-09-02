#import <React/RCTUIManager.h>
#import <ReactCommon/CallInvoker.h>
#import <Reanimated/UIScheduler.h>

#include <memory>

namespace reanimated {

using namespace facebook;
using namespace react;

class REAIOSUIScheduler : public UIScheduler {
 public:
  void scheduleOnUI(std::function<void()> job) override;
};

} // namespace reanimated
