#if __cplusplus

#import <React/RCTEventDispatcher.h>
#import <Reanimated/NativeReanimatedModule.h>
#include <memory>

namespace reanimated {

std::shared_ptr<reanimated::NativeReanimatedModule> createReanimatedModule(
    RCTBridge *bridge,
    const std::shared_ptr<facebook::react::CallInvoker> &jsInvoker);

}

#endif
