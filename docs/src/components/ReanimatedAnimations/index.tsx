import React, { Fragment } from 'react';
import { useState, useRef, useEffect } from 'react';
import useScreenSize from '@site/src/hooks/useScreenSize';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import clsx from 'clsx';
import styles from './styles.module.css';

import ReanimatedAnimationsBackground from '@site/src/components/ReanimatedAnimations/ReanimatedAnimationsBackground';
import ReanimatedAnimationsSection from '@site/src/components/ReanimatedAnimations/ReanimatedAnimationsSection';
import GyroscopeExample from '@site/src/components/ReanimatedExamples/GyroscopeExample';
import SpringBasicExample from '../../components/ReanimatedExamples/SpringBasicExample';
import DecayBasicExample from '../../components/ReanimatedExamples/DecayBasicExample';
import FadeTileExample from '../../components/ReanimatedExamples/FadeTileExample';
import SharedElementExample from '../ReanimatedExamples/SharedElementExample';
import KeyboardExample from '../ReanimatedExamples/KeyboardExample';
import BrowserOnly from '@docusaurus/BrowserOnly';

const sections = [
  {
    title: 'Animations',
    body: 'Animate every React Native prop on iOS, Android and the Web up to 120 fps.',
    code: `function App() {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return <Animated.View style={{ ...styles.box, width }} />
}`,
    component: <SpringBasicExample />,
    tabletComponent: <SpringBasicExample initialOffset={100} />,
    mobileComponent: <SpringBasicExample initialOffset={35} />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation',
  },
  {
    title: 'Gestures',
    body: 'Gesture smoothly thanks to Reanimated’s integration with React Native Gesture Handler.',
    code: `import { Gesture, GestureDetector } from “react-native-gesture-handler”;
 
function App() {
  const pan = Gesture.Pan();

  return (
    <GestureDetector gesture={pan}>
      <Animated.View />
    </GestureDetector>
  );
}`,
    component: <DecayBasicExample />,
    label: 'Grab and drag the square',
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/handling-gestures',
  },
  {
    title: 'Layout animations',
    body: 'Animate views when they are added and removed from the view hierarchy. Just like that.',
    code: `function App() {
  return <Animated.View entering={FadeIn} exiting={FadeOut} />;
}`,
    component: <FadeTileExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/layout-animations/entering-exiting-animations',
  },
  {
    title: 'Sensor-based animations',
    body: 'Connect your animations to a gyroscope or accelerometer with just one hook. It’s that easy.',
    code: `const gyroscope = useAnimatedSensor(SensorType.GYROSCOPE);

useDerivedValue(() => {
  const { x, y, z } = gyroscope.sensor.value;
});`,
    component: <GyroscopeExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/device/useAnimatedSensor',
  },
  {
    title: 'Keyboard-based animations',
    body: 'Create animations based on the device keyboard state and position.',
    code: `function App() {
  const keyboard = useAnimatedKeyboard();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  });
  //...
}`,
    component: <KeyboardExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/device/useAnimatedKeyboard',
  },
  {
    title: 'Shared Element Transitions',
    body: 'Seamlessly animate elements between navigation screens with a single line of code.',
    code: `function App() {
  <Animated.View
  sharedTransitionTag="hero-element"
  />
}`,
    component: <SharedElementExample />,
    docsLink:
      'https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview',
  },
];

const ReanimatedAnimations = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const containerRef = useRef(null);
  const { windowWidth } =
    ExecutionEnvironment.canUseViewport && useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;

      const sectionHeight = windowWidth;

      const currentSection =
        containerTop < 100 &&
        Math.abs(containerTop) < (sections.length - 0.75) * sectionHeight
          ? Math.floor(Math.abs(containerTop) / (sectionHeight - 75))
          : -1;

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToElement = (id: string) => {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ReanimatedAnimationsBackground>
      <div className={styles.animationsContainer}>
        {/* Copy hidden for now */}
        {/* <div>
          <h3>Play with the animations!</h3>
          <h5>
            Check out the animations and check how you can implement it to your
            product.
          </h5>
        </div> */}
        <div ref={containerRef}>
          {sections.map((section, idx) => (
            <Fragment key={idx}>
              <ReanimatedAnimationsSection
                title={section.title}
                body={section.body}
                code={section.code}
                component={section.component}
                label={section.label}
                docsLink={section.docsLink}
                mobileComponent={section.mobileComponent}
                tabletComponent={section.tabletComponent}
                idx={idx}
              />
            </Fragment>
          ))}
        </div>
        <div
          className={clsx(
            styles.dotsContainer,
            activeSection !== -1 ? styles.showDots : ''
          )}>
          {sections.map((_, idx) => (
            <div
              key={idx}
              onClick={() => scrollToElement(idx.toString())}
              className={clsx(
                styles.dot,
                activeSection === idx && styles.active
              )}
            />
          ))}
        </div>
      </div>
    </ReanimatedAnimationsBackground>
  );
};

export default ReanimatedAnimations;
