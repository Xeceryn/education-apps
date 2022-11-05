import React, {useMemo, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import IntroScreen from '../screens/intro.screen';
import LoginScreen from '../screens/login.screen';
import RegistrasiScreen from '../screens/registrasi.screen';
import OtpScreen from '../screens/otp.screen';
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
import {AuthContext} from '../utils/context.utils';

const Navigation = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [userData, setUserData] = useState(null);
  const [userRegist, setUserRegist] = useState(null);

  useEffect(() => {
    const checkFirst = async () => {
      const first = await AsyncStorageLib.getItem('first');
      if (first === 'false') {
        setIsFirst(false);
      }
    };
    checkFirst();
  }, []);

  const authContext = useMemo(() => ({
    first: async () => {
      await AsyncStorageLib.setItem('first', JSON.stringify(false));
      setIsFirst(false);
    },
    sign: async data => {
      await AsyncStorageLib.setItem('userData', data);
      setUserData(userData);
    },
    regist: async data => {
      await AsyncStorageLib.setItem('userRegist', data);
      setUserRegist(userRegist);
    },
  }));
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isFirst ? (
            <Stack.Screen name="Intro" component={IntroScreen} />
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registrasi" component={RegistrasiScreen} />
              <Stack.Screen name="OTP" component={OtpScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
