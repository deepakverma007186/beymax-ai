import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Beymax Ai Welcomes You ✈️🌏</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
