import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Bangers-Regular', color: 'coral'}}>
        Beymax Welcomes you to splash screen
      </Text>
      <Icon name="checkcircle" size={30} color={'teal'} />
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
