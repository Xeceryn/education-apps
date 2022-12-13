import React, {useMemo, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import IntroScreen from '../screens/intro.screen';
import LoginScreen from '../screens/login.screen';
import RegistrasiScreen from '../screens/registrasi.screen';
import OtpScreen from '../screens/otp.screen';
import HomeScreen from '../screens/home.screen';
import AkunScreen from '../screens/akun.screen';
import AktifasiAkunScreen from '../screens/aktifasiAkun.screen';
import StatusAktifasiScreen from '../screens/statusAktifasi.screen';
import ProfilScreen from '../screens/profil.screen';
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
import {AuthContext} from '../utils/context.utils';
import colors from '../utils/colors.utils';

const Navigation = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
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

    async function checkUser() {
      const login = await AsyncStorageLib.getItem('isLogin');
      if (login === 'false') {
        setIsLogin(false);
      }
    }
    checkUser();
  }, []);

  const authContext = useMemo(() => ({
    first: async () => {
      await AsyncStorageLib.setItem('first', JSON.stringify(false));
      setIsFirst(false);
    },
    sign: async data => {
      await AsyncStorageLib.setItem('isLogin', JSON.stringify(false));
      setIsLogin(false);
    },
    regist: async data => {
      await AsyncStorageLib.setItem('userRegist', data);
      setUserRegist(userRegist);
    },
  }));

  const Bag = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Bag!</Text>
      </View>
    );
  };

  const HomeTabs = () => {
    return (
      <Bottom.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Bag') {
              iconName = focused ? 'basket' : 'basket-outline';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.grey,
          tabBarStyle: {backgroundColor: colors.primary},
          headerShown: false,
        })}>
        <Bottom.Screen name="Home" component={HomeScreen} />
        <Bottom.Screen name="Bag" component={Bag} />
        <Bottom.Screen name="Akun" component={AkunScreen} />
      </Bottom.Navigator>
    );
  };
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isFirst ? (
            <Stack.Screen name="Intro" component={IntroScreen} />
          ) : isLogin ? (
            <Stack.Group>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registrasi" component={RegistrasiScreen} />
              <Stack.Screen name="OTP" component={OtpScreen} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="HomeTabs" component={HomeTabs} />
              <Stack.Screen name="Aktifasi" component={AktifasiAkunScreen} />
              <Stack.Screen name="Status" component={StatusAktifasiScreen} />
              <Stack.Screen name="Profil" component={ProfilScreen} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
