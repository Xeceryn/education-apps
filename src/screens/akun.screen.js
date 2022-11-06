import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors.utils';

const Akun = () => {
  return (
    <View style={styles.akunContainer}>
      <Text>Akun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  akunContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default Akun;
