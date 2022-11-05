import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../utils/colors.utils';

const ButtonType = ({onPress, buttonText, isSelect}) => {
  return (
    <Pressable style={styles.buttonType(isSelect)} onPress={onPress}>
      <Text style={styles.buttonTypeText(isSelect)}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonType: isSelect => ({
    backgroundColor: isSelect ? colors.primary : colors.white,
    width: wp('40%'),
    height: hp('8%'),
    borderRadius: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp('2%'),
  }),
  buttonTypeText: isSelect => ({
    color: isSelect ? colors.white : colors.primary,
    fontWeight: '700',
    fontSize: 18,
  }),
});

export default ButtonType;
