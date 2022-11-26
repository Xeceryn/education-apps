import React, {useEffect, useRef, useState, useContext} from 'react';
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
import ButtonFilled from '../components/buttonFilled.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';
import {AuthContext} from '../utils/context.utils';

const OtpScreen = ({navigation}) => {
  const {sign} = useContext(AuthContext);
  const [time, setTime] = useState(180);
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
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  const backButton = () => {
    navigation.goBack();
  };

  const sendOtp = () => {
    setTime((timerRef.current = 180));
    // request send OTP
  };

  const verifyOtp = () => {
    // send otp code to server
    // if success send to home
    // else toast.
    sign();
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
          {time > 0 ? (
            <ButtonCountDown
              onPress={sendOtp}
              disabled={true}
              timer={time > 0 ? `${time} Seconds` : ''}
              buttonText={'Kirim Ulang'}
            />
          ) : (
            <ButtonCountDown
              onPress={sendOtp}
              timer={''}
              buttonText={'Kirim Ulang'}
            />
          )}
        </View>
        <View style={styles.buttonBottom}>
          <ButtonFilled
            buttonText={'Verifikasi'}
            iconName={'arrow-forward'}
            iconColor={colors.primary}
            iconSize={20}
            onPress={verifyOtp}
            buttonSize={'90'}
            buttonColor={colors.secondary}
            textColor={colors.primary}
          />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    top: hp('-38%'),
    left: wp('-46%'),
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
  buttonBottom: {
    bottom: wp('-22%'),
  },
});

export default OtpScreen;
