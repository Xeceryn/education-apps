import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../utils/colors.utils';

const ButtonType = ({buttonText}) => {
  return (
    <Pressable style={styles.buttonType}>
      <Text style={styles.buttonTypeText}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonType: {
    backgroundColor: '#FFF',
    width: wp('40%'),
    height: hp('8%'),
    borderRadius: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    margin: wp('2%'),
  },
  buttonTypeText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ButtonType;
