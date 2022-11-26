import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ButtonFilled from '../components/buttonFilled.comp';
import BackButton from '../components/backButton.comp';

import colors from '../utils/colors.utils';
import getImageByName from '../utils/images.utils';

const StatusAktifasi = ({navigation}) => {
  const backButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.statusContainer}>
      <View style={styles.backButtonContainer}>
        <BackButton iconColor={colors.white} onPress={backButton} />
      </View>
      <Image source={getImageByName('OtpArt')} />
      <Text style={styles.title}>Berhasil!</Text>
      <Text style={styles.subtitle}>
        Aktifasi akun sedang kami proses paling lambat 48 jam kerja.
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonFilled
          buttonColor={colors.white}
          textColor={colors.neutral}
          buttonSize={'90'}
          iconName={'arrow-forward'}
          iconColor={colors.neutral}
          iconSize={22}
          buttonText={'Lanjut'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingTop: wp('4%'),
  },
  backButtonContainer: {
    top: wp('-55%'),
    right: wp('45%'),
  },
  title: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 34,
  },
  subtitle: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 14,
    marginHorizontal: wp('4%'),
    textAlign: 'center',
  },
  buttonContainer: {
    top: hp('25%'),
  },
});

export default StatusAktifasi;
