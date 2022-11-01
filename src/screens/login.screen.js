import React from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Background from '../components/background.comp';
import Input from '../components/input.comp';
import ButtonFilled from '../components/buttonFilled.comp';
import ButtonOutline from '../components/buttonOutline.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';
import strings from '../utils/strings.utils';

const LoginScreen = () => {
  return (
    <Background backgroundName={'LoginBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.ilustrasiContainer}>
        <Image
          style={styles.ilustrasiImage}
          source={getImageByName('LoginArt')}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>{strings.wellcome}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            label={'Username/Email'}
            leftIconName={'person'}
            rightIconName={'arrow-forward'}
            iconColor={'#FFF'}
            iconSize={22}
            placeholder={'Username'}
            placeholderTextColor={'#FFF'}
            textContentType={'username'}
          />
          <Input
            label={'Password'}
            leftIconName={'lock-open'}
            rightIconName={'eye-off'}
            iconColor={'#FFF'}
            iconSize={22}
            placeholder={'Password'}
            placeholderTextColor={'#FFF'}
            textContentType={'password'}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.forgotContainer}>
          <Pressable>
            <Text style={styles.forgotText}>{'Lupa Password?'}</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonFilled
            buttonText={'Masuk'}
            iconName={'arrow-forward'}
            iconColor={colors.primary}
            iconSize={20}
          />
          <ButtonOutline buttonText={'Daftar Akun'} />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  ilustrasiContainer: {
    position: 'absolute',
    top: hp('1%'),
  },
  ilustrasiImage: {
    width: wp('84%'),
    height: hp('44%'),
    resizeMode: 'stretch',
  },
  formContainer: {
    top: hp('18%'),
    alignItems: 'center',
  },
  loginTextContainer: {
    position: 'absolute',
    width: wp('40%'),
    left: wp('0%'),
    top: hp('-7%'),
  },
  loginText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 32,
  },
  inputContainer: {
    top: hp('4%'),
  },
  forgotContainer: {
    top: hp('5%'),
    left: wp('29%'),
  },
  forgotText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 12,
  },
  buttonContainer: {
    top: hp('10%'),
  },
});

export default LoginScreen;
