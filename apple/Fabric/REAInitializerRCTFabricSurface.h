#ifdef RCT_NEW_ARCH_ENABLED

#import <React/RCTFabricSurface.h>
#import <Reanimated/REAModule.h>

@interface REAInitializerRCTFabricSurface : RCTFabricSurface

@property REAModule *reaModule;

@end

#endif // RCT_NEW_ARCH_ENABLED
