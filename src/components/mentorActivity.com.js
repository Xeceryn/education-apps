import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../utils/colors.utils';
import ButtonFilled from './buttonFilled.comp';
import getImageByName from '../utils/images.utils';

const MentorActivity = ({title, subtitle, onPress, status}) => {
  return (
    <View style={styles.mentorActivityContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.topContainer}>
          {status === 'Active' ? (
            <Image source={getImageByName('OtpArt')} style={styles.image} />
          ) : null}
          <View style={styles.textContainer(status)}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        {status === 'Active' ? (
          <ButtonFilled
            buttonText={'Dashboard Kelas'}
            iconName={'arrow-forward'}
            iconSize={22}
            iconColor={colors.white}
            buttonColor={colors.primary}
            buttonSize={'80%'}
            textColor={colors.white}
            onPress={onPress}
          />
        ) : status === 'Inactive' ? (
          <ButtonFilled
            buttonText={'Verifikasi Sekarang'}
            iconName={'arrow-forward'}
            iconSize={22}
            iconColor={colors.white}
            buttonColor={colors.secondary}
            buttonSize={'80%'}
            textColor={colors.white}
            onPress={onPress}
          />
        ) : null}
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
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: wp('20%'),
    height: wp('20%'),
  },
  textContainer: status => ({
    width: status === 'Active' ? wp('40%') : wp('85%'),
    left: status === 'Active' ? wp('-19%') : wp('0%'),
  }),
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
