import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors.utils';
import RoundedImage from '../components/roundedImage.comp';
import BadgeStatus from '../components/badgeStatus.comp';
import Achievement from '../components/achievement.comp';
import MentorActivity from '../components/mentorActivity.com';
import ButonOutline from '../components/buttonOutline.comp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const Akun = ({navigation}) => {
  return (
    <View style={styles.akunContainer}>
      <View style={styles.topContainer}>
        <RoundedImage imageName={'ImageDefault'} size={'25'} />
        <Text>Nadia Sari.Sp.d</Text>
        <BadgeStatus type={'Mentor'} />
        <Achievement />
        <MentorActivity
          title={'Akun Mentor Belum Aktif'}
          subtitle={
            'Silahkan melakukan verifikasi untuk menggunakan akun sebagai mentor'
          }
          onPress={() => navigation.navigate('Aktifasi')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.textSetting}>Pengaturan</Text>
        <View style={styles.itemSetting}>
          <View style={styles.childSetting}>
            <Icon name="image-outline" size={25} color={colors.neutral} />
            <Text style={styles.textChild}>Profile</Text>
          </View>
          <View style={styles.childSetting}>
            <Icon
              name="shield-checkmark-outline"
              size={25}
              color={colors.neutral}
            />
            <Text style={styles.textChild}>Keamanan</Text>
          </View>
          <View style={styles.childSetting}>
            <Icon
              name="notifications-outline"
              size={25}
              color={colors.neutral}
            />
            <Text style={styles.textChild}>Notifikasi</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ButonOutline
            buttonText={'Keluar'}
            borderColor={'#939393'}
            textColor={'#939393'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  akunContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    alignItems: 'center',
    paddingTop: hp('5%'),
    backgroundColor: colors.primary,
    borderBottomLeftRadius: wp('1%'),
    borderBottomRightRadius: wp('1%'),
    paddingBottom: hp('3%'),
  },
  bottomContainer: {
    marginHorizontal: wp('5%'),
    marginTop: hp('4%'),
  },
  textSetting: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.neutral,
  },
  itemSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  childSetting: {
    backgroundColor: colors.white,
    width: wp('28%'),
    height: wp('20%'),
    borderRadius: wp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('4%'),
    elevation: wp('4%'),
    shadowColor: colors.neutral,
  },
  textChild: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.neutral,
    marginTop: wp('2%'),
  },
  buttonContainer: {
    bottom: wp('-10%'),
  },
});

export default Akun;
