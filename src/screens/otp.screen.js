import React, {useEffect, useRef, useState} from 'react';
import {View, Image, StatusBar, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Background from '../components/background.comp';
import BackButton from '../components/backButton.comp';
import Header from '../components/header.comp';
import InputOtp from '../components/inputOtp.comp';
import ButtonCountDown from '../components/buttonCountDown.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';

const OtpScreen = ({navigation}) => {
  const [time, setTime] = useState(60);
  const [disableOtp, setDisableOtp] = useState(true);
  const [otpCode, setOTPCode] = useState('');
  const [isOtpReady, setIsOtpReady] = useState(false);
  const maximumCodeLength = 6;
  const phone = '081231272698';
  const timerRef = useRef(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        setDisableOtp(false);
      } else {
        setTime(timerRef.current);
        setDisableOtp(true);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
      setDisableOtp(false);
    };
  }, [time]);

  const backButton = () => {
    navigation.goBack();
  };

  const sendOtp = () => {
    console.log('send');
    // Jalankan ulang timer
  };
  return (
    <Background backgroundName={'RegistrasiBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.backButtonContainer}>
        <BackButton onPress={backButton} />
      </View>
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
          <ButtonCountDown
            onPress={sendOtp}
            disabled={disableOtp}
            timer={time > 0 ? `${time} Seconds` : ''}
            buttonText={'Kirim Ulang'}
          />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    top: hp('-40%'),
    left: wp('-44%'),
  },
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
