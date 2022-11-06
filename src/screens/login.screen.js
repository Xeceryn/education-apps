import React, {useContext, useState} from 'react';
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
import {Formik} from 'formik';
import * as yup from 'yup';
import Background from '../components/background.comp';
import Header from '../components/header.comp';
import InputPhone from '../components/inputPhone.comp';
import Input from '../components/input.comp';
import ButtonFilled from '../components/buttonFilled.comp';
import ButtonOutline from '../components/buttonOutline.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';
import {AuthContext} from '../utils/context.utils';

const loginForm = yup.object().shape({
  phone: yup.number().required('No Handphone harus diisi'),
  password: yup.string().required('Password harus diisi'),
});

const LoginScreen = ({navigation}) => {
  const {sign} = useContext(AuthContext);
  const [rightIconName, setRightIconName] = useState('eye-off');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const rightIconPress = () => {
    if (secureTextEntry === true) {
      setRightIconName('eye');
      setSecureTextEntry(false);
    } else if (secureTextEntry === false) {
      setRightIconName('eye-off');
      setSecureTextEntry(true);
    }
  };
  return (
    <Background backgroundName={'LoginBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.ilustrasiContainer}>
        <Image source={getImageByName('LoginArt')} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.headerContainer}>
          <Header headerTitle={'Selamat Datang!'} />
        </View>
        <Formik
          initialValues={{
            phone: '',
            password: '',
          }}
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={loginForm}
          enableReinitialize
          onSubmit={({phone, password}) => {
            const initial = '+62';
            const userData = {
              phone: initial + phone,
              password,
            };
            sign(userData);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
            errors,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <InputPhone
                  label={'No Handphone'}
                  placeholder={'0'}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  placeholderTextColor={
                    errors.phone ? colors.alert : colors.white
                  }
                />
                <Input
                  label={'Password'}
                  leftIconName={'lock-open'}
                  rightIconName={rightIconName}
                  iconColor={'#FFF'}
                  iconSize={22}
                  placeholder={'Password'}
                  placeholderTextColor={
                    errors.password ? colors.alert : colors.white
                  }
                  textContentType={'password'}
                  secureTextEntry={secureTextEntry}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  rightIconPress={rightIconPress}
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
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
                <ButtonOutline
                  buttonText={'Daftar Akun'}
                  onPress={() => navigation.navigate('Registrasi')}
                />
              </View>
            </>
          )}
        </Formik>
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
    top: hp('17%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    width: wp('40%'),
    left: wp('0%'),
    top: hp('-7%'),
  },
  inputContainer: {
    top: hp('7%'),
  },
  forgotContainer: {
    top: hp('8%'),
    left: wp('29%'),
  },
  forgotText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 14,
  },
  buttonContainer: {
    top: hp('10%'),
  },
});

export default LoginScreen;
