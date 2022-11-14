import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../utils/colors.utils';
import ButtonFilled from './buttonFilled.comp';

const MentorActivity = ({title, subtitle}) => {
  return (
    <View style={styles.mentorActivityContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <ButtonFilled
          buttonText={'Verifikasi Sekarang'}
          iconName={'arrow-forward'}
          iconSize={22}
          iconColor={colors.white}
          buttonColor={colors.secondary}
          buttonSize={'80%'}
          textColor={colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mentorActivityContainer: {
    width: wp('90%'),
    backgroundColor: colors.white,
    borderRadius: wp('1%'),
  },
  itemContainer: {
    margin: wp('5%'),
    width: wp('85%'),
  },
  titleText: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.neutral,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.neutral,
  },
});

export default MentorActivity;
