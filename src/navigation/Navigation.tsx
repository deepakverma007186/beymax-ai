import AlbumGallery from '@features/AlbumGallery';
import MultiForm from '@features/multiform/MultiForm';
import ShowAlbum from '@features/ShowAlbum';
import SplashScreen from '@features/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '@utils/NavigationUtils';
import React from 'react';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="MultiForm"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ShowAlbum" component={ShowAlbum} />
        <Stack.Screen name="AlbumGallery" component={AlbumGallery} />
        <Stack.Screen name="MultiForm" component={MultiForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
