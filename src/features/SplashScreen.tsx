import CustomText from '@components/ui/CustomText';
import FlashButton from '@components/ui/FlashButton';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* <Icon name="checkcircle" size={30} color={'teal'} />
      <CustomText variant="h2">Beymax Welcomes you to splash screen</CustomText> */}
      <FlashButton>
        <Text style={{color: 'black', fontSize: 20}}>Post a property</Text>
      </FlashButton>
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
