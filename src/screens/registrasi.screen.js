import React, {useContext, useState} from 'react';
import {StatusBar, View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as yup from 'yup';
import Background from '../components/background.comp';
import BackButton from '../components/backButton.comp';
import Header from '../components/header.comp';
import ButtonType from '../components/buttonType.comp';
import InputPhone from '../components/inputPhone.comp';
import Input from '../components/input.comp';
import ButtonFilled from '../components/buttonFilled.comp';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';

const registForm = yup.object().shape({
  username: yup.string().required('Username harus diisi'),
  phone: yup.number().required('No Handphone harus diisi'),
  password: yup.string().required('Password harus diisi'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password tidak sama'),
});

const RegistrasiScreen = ({navigation}) => {
  const [rightIconName, setRightIconName] = useState('eye-off');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [buttonValue, setButtonValue] = useState('');
  const [siswaSelect, isSiswaSelect] = useState(false);
  const [mentorSelect, isMentorSelect] = useState(false);

  const backButton = () => {
    console.log('back');
    navigation.goBack();
  };
  const buttonSiswa = () => {
    setButtonValue('siswa');
    isSiswaSelect(true);
    isMentorSelect(false);
  };

  const buttonMentor = () => {
    setButtonValue('mentor');
    isMentorSelect(true);
    isSiswaSelect(false);
  };

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
    <Background backgroundName={'RegistrasiBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.backButtonContainer}>
        <BackButton onPress={backButton} />
      </View>
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
          <ButtonType
            buttonText={'Sebagai Siswa'}
            onPress={buttonSiswa}
            isSelect={siswaSelect}
          />
          <ButtonType
            buttonText={'Sebagai Mentor'}
            onPress={buttonMentor}
            isSelect={mentorSelect}
          />
        </View>
        <Formik
          initialValues={{
            username: '',
            phone: '',
            password: '',
            passwordConfirmation: '',
          }}
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={registForm}
          enableReinitialize={true}
          onSubmit={({username, phone, password, passwordConfirmation}) => {
            const initial = '+62';
            const userRegist = {
              username,
              phone: initial + phone,
              password,
              passwordConfirmation,
              buttonValue,
            };
            // sign(phone);
            // send request regist to server.
            // if success goback to login.
            // else toast
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
              {console.log(isValid)}
              <View style={styles.textInputContainer}>
                <Input
                  label={'Username'}
                  placeholder={'Username'}
                  placeholderTextColor={
                    errors.username ? colors.alert : colors.white
                  }
                  leftIconName={'person'}
                  rightIconName={'arrow-forward'}
                  iconColor={colors.white}
                  iconSize={22}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
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
                  placeholder={'Password'}
                  placeholderTextColor={
                    errors.password ? colors.alert : colors.white
                  }
                  leftIconName={'lock-open'}
                  rightIconName={rightIconName}
                  iconColor={'#FFF'}
                  iconSize={22}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  rightIconPress={rightIconPress}
                  secureTextEntry={secureTextEntry}
                />
                <Input
                  label={'Konfirmasi Password'}
                  placeholder={'Ulangi Password'}
                  placeholderTextColor={
                    errors.passwordConfirmation ? colors.alert : colors.white
                  }
                  leftIconName={'lock-open'}
                  rightIconName={rightIconName}
                  iconColor={'#FFF'}
                  iconSize={22}
                  onChangeText={handleChange('passwordConfirmation')}
                  onBlur={handleBlur('passwordConfirmation')}
                  value={values.passwordConfirmation}
                  rightIconPress={rightIconPress}
                  secureTextEntry={secureTextEntry}
                />
              </View>
              <View style={styles.buttonContainer}>
                <ButtonFilled
                  buttonText={'Daftar'}
                  iconName={'arrow-forward'}
                  iconColor={colors.primary}
                  iconSize={22}
                  onPress={handleSubmit}
                  disabled={!isValid}
                  buttonSize={'90'}
                  buttonColor={colors.secondary}
                  textColor={colors.primary}
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
  backButtonContainer: {
    top: hp('-22%'),
    left: wp('-46%'),
  },
  ilustrasiContainer: {
    position: 'absolute',
    top: hp('4%'),
  },
  formContainer: {
    top: hp('32%'),
    alignItems: 'center',
  },
  headerContainer: {
    position: 'absolute',
    width: wp('40%'),
    left: wp('0%'),
    top: hp('-28%'),
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
