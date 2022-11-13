import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors.utils';

const ButtonDonasi = () => {
  return (
    <View style={styles.donasiContainer}>
      <Icon name="gift" size={30} color={colors.primary} />
      <View>
        <Text style={styles.title}>Donasi</Text>
        <Text style={styles.subtitle}>Beri donasi untuk pengembangan kami</Text>
      </View>
      <Icon name="chevron-forward" size={30} color={colors.neutral} />
    </View>
  );
};

const styles = StyleSheet.create({
  donasiContainer: {
    backgroundColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: wp('4%'),
    borderRadius: wp('1%'),
    alignItems: 'center',
    height: wp('15%'),
    marginTop: wp('4%'),
    elevation: wp('2%'),
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.neutral,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.neutral,
  },
});

export default ButtonDonasi;
