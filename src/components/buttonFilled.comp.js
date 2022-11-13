import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../utils/colors.utils';

const ButtonFilled = ({
  onPress,
  disabled,
  buttonText,
  textColor,
  buttonSize,
  buttonColor,
  iconName,
  iconColor,
  iconSize,
}) => {
  return (
    <View style={styles.buttonFilledContainer}>
      <Pressable
        style={styles.buttonFilled(buttonSize, buttonColor)}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.buttonFilledText(textColor)}>{buttonText}</Text>
        <Icon
          style={styles.buttonFilledIcon}
          name={iconName}
          color={iconColor}
          size={iconSize}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFilledContainer: {
    marginTop: hp('1%'),
  },
  buttonFilled: (buttonSize, buttonColor) => ({
    backgroundColor: colors.secondary,
    width: wp(buttonSize),
    height: hp('6%'),
    borderRadius: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  buttonFilledText: textColor => ({
    color: textColor,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16,
  }),
  buttonFilledIcon: {
    marginLeft: wp('2%'),
  },
});

export default ButtonFilled;
