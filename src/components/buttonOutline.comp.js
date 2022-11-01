import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ButtonOutline = ({buttonText}) => {
  return (
    <View style={styles.buttonOutlineContainer}>
      <Pressable style={styles.buttonOutline}>
        <Text style={styles.buttonOutlineText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOutlineContainer: {
    marginTop: hp('1%'),
  },
  buttonOutline: {
    width: wp('90%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 1.5,
    borderRadius: wp('1%'),
  },
  buttonOutlineText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
  },
});

export default ButtonOutline;
