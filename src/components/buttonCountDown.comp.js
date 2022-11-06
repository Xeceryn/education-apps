import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ButtonCountDown = ({onPress, disabled, timer, buttonText}) => {
  return (
    <View style={styles.buttonCountDownContainer}>
      <Pressable
        style={styles.buttonOutline}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.buttonText}>{`${timer} ${buttonText}`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCountDownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOutline: {
    width: wp('45%'),
    height: hp('6%'),
    borderColor: '#FFF',
    borderWidth: 1.5,
    borderRadius: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ButtonCountDown;
