import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ButtonOutline = ({onPress, buttonText, borderColor, textColor}) => {
  return (
    <View style={styles.buttonOutlineContainer}>
      <Pressable style={styles.buttonOutline(borderColor)} onPress={onPress}>
        <Text style={styles.buttonOutlineText(textColor)}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOutlineContainer: {
    marginTop: hp('1%'),
  },
  buttonOutline: borderColor => ({
    width: wp('90%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: borderColor,
    borderWidth: 1.5,
    borderRadius: wp('1%'),
  }),
  buttonOutlineText: textColor => ({
    color: textColor,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16,
  }),
});

export default ButtonOutline;
