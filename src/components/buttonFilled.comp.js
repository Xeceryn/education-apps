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
  iconName,
  iconColor,
  iconSize,
}) => {
  return (
    <View style={styles.buttonFilledContainer}>
      <Pressable
        style={styles.buttonFilled}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.buttonFilledText}>{buttonText}</Text>
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
  buttonFilled: {
    backgroundColor: colors.secondary,
    width: wp('90%'),
    height: hp('6%'),
    borderRadius: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFilledText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16,
  },
  buttonFilledIcon: {
    marginLeft: wp('2%'),
  },
});

export default ButtonFilled;
