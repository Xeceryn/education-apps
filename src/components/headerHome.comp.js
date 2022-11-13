import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundedImage from './roundedImage.comp';
import colors from '../utils/colors.utils';

const HeaderHome = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.locationContainer}>
        <Icon name="location-outline" size={30} color={colors.neutral} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Lokasi kamu</Text>
          <Text style={styles.subtitle}>Jl. Jembatan No.2, jakarta</Text>
        </View>
      </View>
      <Icon name="notifications-outline" size={30} color={colors.neutral} />
      <RoundedImage imageName={'ImageDefault'} size={'10'} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('4%'),
    paddingTop: wp('4%'),
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: wp('65%'),
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: wp('2%'),
  },
  textTitle: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.neutral,
  },
  subtitle: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.neutral,
  },
});

export default HeaderHome;
