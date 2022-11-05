import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IntroScreen from '../screens/introscreen/index.introscreen';
import LoginScreen from '../screens/login.screen';
import RegistrasiScreen from '../screens/registrasi.screen';
import OtpScreen from '../screens/otp.screen';
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Intro" component={OtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
