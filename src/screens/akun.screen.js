import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
  const [akunStatus, setAkunStatus] = useState('Active');
  return (
    <View style={styles.akunContainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <LinearGradient
        colors={['#1C8CF4', '#73B3FF']}
        start={{x: 1, y: 0.5}}
        end={{x: 0.5, y: 1}}
        style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Akun Anda</Text>
        </View>
        <View style={styles.imageContainer}>
          <RoundedImage imageName={'ImageDefault'} size={'25'} />
        </View>
        <Text style={styles.textTypeUser}>Nadia Sari.Sp.d</Text>
        <View style={styles.badgeStatus}>
          <BadgeStatus type={'Mentor'} />
        </View>
        <Achievement />
        <MentorActivity
          title={
            akunStatus === 'Active' ? 'Kelas Anda' : 'Akun Mentor Belum Aktif'
          }
          subtitle={
            akunStatus === 'Active'
              ? 'Periksa kelas anda dan perbarui untuk mulai mengajar siswa'
              : akunStatus === 'Inactive'
              ? 'Silahkan melakukan verifikasi untuk menggunakan akun sebagai mentor'
              : 'Akun anda masih dalam tahap verifikasi oleh tim kami, mohon untuk mengunggu'
          }
          onPress={() =>
            akunStatus === 'Active'
              ? navigation.navigate('Profil')
              : navigation.navigate('Aktifasi')
          }
          status={akunStatus}
        />
      </LinearGradient>
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
      </View>
      <View style={styles.buttonContainer}>
        <ButonOutline
          buttonText={'Keluar'}
          borderColor={'#939393'}
          textColor={'#939393'}
        />
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
    borderBottomLeftRadius: wp('1%'),
    borderBottomRightRadius: wp('1%'),
    paddingBottom: hp('3%'),
    paddingTop: wp('12%'),
  },
  titleContainer: {
    top: wp('-1%'),
    left: wp('-34%'),
  },
  textTitle: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  imageContainer: {
    top: wp('3%'),
  },
  textTypeUser: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 18,
    marginTop: wp('4%'),
  },
  badgeStatus: {
    padding: wp('2%'),
  },
  bottomContainer: {
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
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
    bottom: wp('8%'),
    marginHorizontal: wp('5%'),
    position: 'absolute',
  },
});

export default Akun;
