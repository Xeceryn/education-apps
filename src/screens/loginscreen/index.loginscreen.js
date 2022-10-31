import React from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Background from '../../components/background.comp';
import getImageByName from '../../utils/images.utils';
import colors from '../../utils/colors.utils';
import strings from '../../utils/strings.utils';

const LoginScreen = () => {
  return (
    <Background backgroundName={'LoginBg'}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.ilustCont}>
        <Image source={getImageByName('Presentation')} />
      </View>
      <View style={styles.wellcomeCont}>
        <Text style={styles.wellcomeText}>{strings.wellcome}</Text>
      </View>
      <View style={styles.formCont}>
        <View>
          <Text style={styles.inputName}>Username/Email</Text>
          <View style={styles.inputCont}>
            <Icon name="person" color="#FFF" size={24} />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#FFF"
              style={styles.input}
            />
            <Icon name="arrow-forward-outline" color="#FFF" size={24} />
          </View>
        </View>
        <View style={{marginTop: hp('2%')}}>
          <Text style={styles.inputName}>Password</Text>
          <View style={styles.inputCont}>
            <Icon name="lock-open" color="#FFF" size={24} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#FFF"
              style={styles.input}
            />
            <Icon name="eye-off" color="#FFF" size={24} />
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  ilustCont: {
    position: 'absolute',
    top: hp('14%'),
  },
  wellcomeCont: {
    position: 'absolute',
    width: wp('40%'),
    left: wp('0%'),
  },
  wellcomeText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 32,
  },
  formCont: {
    top: hp('18%'),
  },
  inputName: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 14,
  },
  inputCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('75%'),
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: wp('2%'),
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
  },
  input: {
    width: wp('55%'),
  },
});

export default LoginScreen;
