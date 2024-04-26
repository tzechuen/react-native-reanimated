'use strict';
import { withStyleAnimation } from '../animation/styleAnimation';
import type { SharedValue } from '../commonTypes';
import { makeUIMutable } from '../mutables';
import { LayoutAnimationType } from './animationBuilder';
import { runOnUIImmediately } from '../threads';
import type {
  SharedTransitionAnimationsValues,
  LayoutAnimation,
} from './animationBuilder/commonTypes';
import { isFabric } from '../PlatformChecker';

const TAG_OFFSET = 1e9;

const IS_FABRIC = isFabric();

function startObservingProgress(
  tag: number,
  sharedValue: SharedValue<Record<string, unknown>>,
  animationType: LayoutAnimationType
): void {
  'worklet';
  const isSharedTransition =
    animationType === LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
  sharedValue.addListener(tag + TAG_OFFSET, () => {
    global._notifyAboutProgress(tag, sharedValue.value, isSharedTransition);
  });
}

function stopObservingProgress(
  tag: number,
  sharedValue: SharedValue<number>,
  removeView = false
): void {
  'worklet';
  sharedValue.removeListener(tag + TAG_OFFSET);
  global._notifyAboutEnd(tag, removeView);
}

function createLayoutAnimationManager() {
  'worklet';
  const currentAnimationForTag = new Map();
  const mutableValuesForTag = new Map();

  return {
    start(
      tag: number,
      type: LayoutAnimationType,
      /**
       * createLayoutAnimationManager creates an animation manager for both Layout animations and Shared Transition Elements animations.
       */
      yogaValues: Partial<SharedTransitionAnimationsValues>,
      config: (
        arg: Partial<SharedTransitionAnimationsValues>
      ) => LayoutAnimation
    ) {
      if (type === LayoutAnimationType.SHARED_ELEMENT_TRANSITION_PROGRESS) {
        global.ProgressTransitionRegister.onTransitionStart(tag, yogaValues);
        return;
      }

      const style = config(yogaValues);
      let currentAnimation = style.animations;

      // When layout animation is requested, but a previous one is still running, we merge
      // new layout animation targets into the ongoing animation
      const previousAnimation = currentAnimationForTag.get(tag);
      if (previousAnimation) {
        currentAnimation = { ...previousAnimation, ...style.animations };
      }
      currentAnimationForTag.set(tag, currentAnimation);

      let value = mutableValuesForTag.get(tag);
      if (value === undefined) {
        value = makeUIMutable(style.initialValues);
        mutableValuesForTag.set(tag, value);
      } else {
        if (!IS_FABRIC) {
          stopObservingProgress(tag, value);
        }
        value._value = style.initialValues;
      }

      // @ts-ignore The line below started failing because I added types to the method – don't have time to fix it right now
      const animation = withStyleAnimation(currentAnimation);

      animation.callback = (finished?: boolean) => {
        if (finished) {
          currentAnimationForTag.delete(tag);
          mutableValuesForTag.delete(tag);
          const shouldRemoveView = type === LayoutAnimationType.EXITING;
          stopObservingProgress(tag, value, shouldRemoveView);
        }
        style.callback &&
          style.callback(finished === undefined ? false : finished);
      };

      startObservingProgress(tag, value, type);
      value.value = animation;
    },
    stop(tag: number) {
      const value = mutableValuesForTag.get(tag);
      if (!value) {
        return;
      }
      if (IS_FABRIC) {
        value.removeListener(tag + TAG_OFFSET);
      } else {
        stopObservingProgress(tag, value);
      }
    },
  };
}

runOnUIImmediately(() => {
  'worklet';
  global.LayoutAnimationsManager = createLayoutAnimationManager();
})();

export type LayoutAnimationsManager = ReturnType<
  typeof createLayoutAnimationManager
>;
