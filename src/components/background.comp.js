import React from 'react';
import {ImageBackground, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import getImageByName from '../utils/images.utils';

const Background = ({backgroundName, children}) => {
  return (
    <ImageBackground
      source={getImageByName(backgroundName)}
      resizeMode="stretch"
      style={styles.containerBg}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardContain}>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerBg: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
  },
  keyboardContain: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Background;
