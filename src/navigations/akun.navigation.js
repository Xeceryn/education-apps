import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AkunScreen from '../screens/akun.screen';
import AktifasiAkunScreen from '../screens/aktifasiAkun.screen';
import StatusAktifasiScreen from '../screens/statusAktifasi.screen';

const Stack = createNativeStackNavigator();

const AkunStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Akun" component={AkunScreen} />
      <Stack.Screen name="Aktifasi" component={AktifasiAkunScreen} />
      <Stack.Screen name="Status" component={StatusAktifasiScreen} />
    </Stack.Navigator>
  );
};

export default AkunStack;
