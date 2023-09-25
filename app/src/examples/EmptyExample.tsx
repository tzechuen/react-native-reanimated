import React from 'react';
import {
  Text,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  Button,
} from 'react-native';
import Animated, {
  useEvent,
  useHandler,
  ReanimatedEvent,
  useSharedValue,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';

const TIME_UNIT = {
  SECOND: 'seconds',
  MINUTE: 'minutes',
  HOUR: 'hours',
};

// type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;

// type HandlerContext = {
//   timeLast: number | null;
// };

export default function TestUseHandler1() {
  const scale = useSharedValue(1);
  const [time, setTime] = React.useState('0 seconds');
  const [unit, setUnit] = React.useState(TIME_UNIT.SECOND);

  const handlers = {
    onScrollEndDrag: (
      event, //: ReanimatedEvent<ScrollEvent>,
      context //: HandlerContext
    ) => {
      'worklet';
      console.log('hello');
      if (!context.timeLast) {
        context.timeLast = performance.now();
        return;
      }
      const timeCurrent = performance.now();
      const timeDifference = timeCurrent - context.timeLast;
      let displayTime; //: string;

      if (unit === TIME_UNIT.SECOND) {
        displayTime = `${(timeDifference / 1000).toPrecision(2)} seconds`;
      } else if (unit === TIME_UNIT.MINUTE) {
        displayTime = `${(timeDifference / 60000).toPrecision(2)} minutes`;
      } else {
        displayTime = `${(timeDifference / 3600000).toPrecision(2)} hours`;
      }

      context.timeLast = timeCurrent;
      scale.value = withTiming(Math.abs(event.contentOffset.x / 100));
      runOnJS(setTime)(displayTime);
    },
  };

  const { context, doDependenciesDiffer, useWeb } = useHandler(
    handlers,
    [unit],
    { timeLast: null }
  );

  const customScrollHandler = (() => {
    console.log('creatingCustomScrollHandler');
    const huj = useEvent(
      (
        event //: ReanimatedEvent<ScrollEvent>
      ) => {
        'worklet';
        console.log(event);
        const { onScrollEndDrag } = handlers;
        if (useWeb) {
          const newEvent = { ...event };
          // Let's spice things up a bit on web
          newEvent.contentOffset.x *= 2;
          onScrollEndDrag(newEvent, context);
        } else {
          onScrollEndDrag(event, context);
        }
      },
      ['onScrollEndDrag'],
      doDependenciesDiffer
    );
    console.log('createdCustomScrollHandler');
    console.log(huj);
    return huj;
  })();

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={customScrollHandler}
        // showsVerticalScrollIndicator={false}
        style={styles.listContent}
        contentContainerStyle={{ alignItems: 'center' }}
        horizontal={true}>
        <Animated.View
          style={[styles.box, { transform: [{ scaleY: scale }] }]}
        />
        <Animated.View
          style={[styles.box, { transform: [{ scaleY: scale }] }]}
        />
        <Animated.View
          style={[styles.box, { transform: [{ scaleY: scale }] }]}
        />
      </Animated.ScrollView>
      <Text>Last time scrolled </Text>
      <Text>{time} ago.</Text>
      <Button title={'Seconds'} onPress={() => setUnit(TIME_UNIT.SECOND)} />
      <Button title={'Minutes'} onPress={() => setUnit(TIME_UNIT.MINUTE)} />
      <Button title={'Hours'} onPress={() => setUnit(TIME_UNIT.HOUR)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    backgroundColor: 'blue',
    maxHeight: 300,
    width: '100%',
  },
  box: {
    width: 600,
    height: 100,
    backgroundColor: 'red',
    margin: 10,
  },
});
