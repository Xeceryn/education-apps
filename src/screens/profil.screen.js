import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profil = () => {
  return (
    <View style={styles.profilContainer}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default Profil;
