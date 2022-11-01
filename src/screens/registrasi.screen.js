import React from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Background from '../components/background.comp';
import Input from '../components/input.comp';
import ButtonFilled from '../components/buttonFilled.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';
import strings from '../utils/strings.utils';

const RegistrasiScreen = () => {
  return (
    <Background backgroundName={'RegistrasiBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.ilustrasiContainer}>
        <Image source={getImageByName('RegistrasiArt')} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  ilustrasiContainer: {
    position: 'absolute',
    top: hp('10%'),
  },
});

export default RegistrasiScreen;
