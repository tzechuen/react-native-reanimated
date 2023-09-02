#pragma once

#include <jsi/jsi.h>

#include <Reanimated/NativeReanimatedModule.h>

#include <memory>

using namespace facebook;

namespace reanimated {

class RNRuntimeDecorator {
 public:
  static void decorate(
      jsi::Runtime &rnRuntime,
      const std::shared_ptr<NativeReanimatedModule> &nativeReanimatedModule,
      const bool isReducedMotion);
};

} // namespace reanimated
