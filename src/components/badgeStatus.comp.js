import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors.utils';

const BadgeStatus = ({type}) => {
  return (
    <View style={styles.badgeContainer}>
      <Icon name="checkmark-circle-outline" color={colors.white} size={25} />
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp('24%'),
    height: wp('8%'),
    borderRadius: wp('5%'),
  },
  typeText: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.white,
  },
});

export default BadgeStatus;
