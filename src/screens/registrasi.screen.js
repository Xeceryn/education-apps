import React from 'react';
import {StatusBar, View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Background from '../components/background.comp';
import Header from '../components/header.comp';
import ButtonType from '../components/buttonType.comp';
import InputPhone from '../components/inputPhone.comp';
import Input from '../components/input.comp';
import ButtonFilled from '../components/buttonFilled.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';

const RegistrasiScreen = () => {
  return (
    <Background backgroundName={'RegistrasiBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.ilustrasiContainer}>
        <Image source={getImageByName('RegistrasiArt')} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Header
            headerTitle={'Hi Teman!'}
            headerSubtitle={
              'Silahkan pilih jenis akun yang akan kamu daftarkan'
            }
          />
        </View>
        <View style={styles.buttonTypeContainer}>
          <ButtonType buttonText={'Sebagai Siswa'} />
          <ButtonType buttonText={'Sebagai Mentor'} />
        </View>
        <View style={styles.textInputContainer}>
          <InputPhone label={'No Handphone'} placeholder={'0'} />
          <Input
            label={'Password'}
            placeholder={'Password'}
            placeholderTextColor={'#FFF'}
            leftIconName={'lock-open'}
            rightIconName={'eye-off'}
            iconColor={'#FFF'}
            iconSize={22}
          />
          <Input
            label={'Konfirmasi Password'}
            placeholder={'Ulangi Password'}
            placeholderTextColor={'#FFF'}
            eftIconName={'lock-open'}
            rightIconName={'eye-off'}
            iconColor={'#FFF'}
            iconSize={22}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonFilled
            buttonText={'Daftar'}
            iconName={'arrow-forward'}
            iconColor={colors.primary}
            iconSize={22}
          />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  ilustrasiContainer: {
    position: 'absolute',
    top: hp('10%'),
  },
  formContainer: {
    top: hp('36%'),
    alignItems: 'center',
  },
  headerContainer: {
    position: 'absolute',
    width: wp('40%'),
    left: wp('0%'),
    top: hp('-30%'),
  },
  buttonTypeContainer: {
    top: hp('-16%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInputContainer: {
    top: hp('-16%'),
  },
  buttonContainer: {
    top: hp('-14%'),
  },
});

export default RegistrasiScreen;
