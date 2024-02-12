import { Text, StyleSheet, View, ScrollView, TextInput } from 'react-native';

import React from 'react';
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';

export default function EmptyExample() {
  const keyboard = useAnimatedKeyboard();
  const translateStyle = useAnimatedStyle(() => {
    // for (let i = 0; i < 1000000; i++) {
    //   let a = 9;
    //   a = a + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
    // }
    return {
      transform: [{ translateY: -keyboard.height.value }],
    };
  });
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scroll}
        // keyboardDismissMode='interactive'
      >
        {new Array(100).fill(null).map((_, i) => <Text key={i}>{i}</Text>)}
      </ScrollView>
      <Animated.View style={translateStyle}>
        <TextInput style={styles.input} autoCorrect />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  scroll: {
    width: '100%',
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'red',
    borderWidth: 1,
  },
});
