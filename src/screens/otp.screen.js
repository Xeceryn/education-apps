import React, {useState} from 'react';
import {View, Image, StatusBar, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Background from '../components/background.comp';
import Header from '../components/header.comp';
import InputOtp from '../components/inputOtp.comp';
import ButtonCountDown from '../components/buttonCountDown.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';

const OtpScreen = () => {
  const [otpCode, setOTPCode] = useState('');
  const [isOtpReady, setIsOtpReady] = useState(false);
  const maximumCodeLength = 6;
  const phone = '081231272698';
  return (
    <Background backgroundName={'RegistrasiBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.ilustrasiContainer}>
        <Image source={getImageByName('OtpArt')} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Header
            headerTitle={'Kode OTP'}
            headerSubtitle={`Kami telah mengirim kode OTP ke no ${phone}`}
          />
        </View>
        <View style={styles.textInputContainer}>
          <InputOtp
            code={otpCode}
            setCode={setOTPCode}
            maximumLength={maximumCodeLength}
            setIsOtpReady={setIsOtpReady}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonCountDown timer={'60'} buttonText={'Seconds Kirim Ulang'} />
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
    top: hp('22%'),
    alignItems: 'center',
  },
  headerContainer: {
    position: 'absolute',
    width: wp('40%'),
    left: wp('0%'),
    top: hp('-30%'),
  },
  textInputContainer: {
    top: hp('-16%'),
  },
  buttonContainer: {
    top: hp('-10%'),
  },
});

export default OtpScreen;
