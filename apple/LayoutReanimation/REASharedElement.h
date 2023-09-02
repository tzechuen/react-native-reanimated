#import <Reanimated/LayoutAnimationType.h>
#import <Reanimated/REASnapshot.h>
#import <Reanimated/REAUIKit.h>

@interface REASharedElement : NSObject

- (instancetype)initWithSourceView:(REAUIView *)sourceView
                sourceViewSnapshot:(REASnapshot *)sourceViewSnapshot
                        targetView:(REAUIView *)targetView
                targetViewSnapshot:(REASnapshot *)targetViewSnapshot;

@property REAUIView *sourceView;
@property REASnapshot *sourceViewSnapshot;
@property REAUIView *targetView;
@property REASnapshot *targetViewSnapshot;
@property LayoutAnimationType animationType;

@end
