import React from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import RoundedImage from '../components/roundedImage.comp';
import ButtonType from '../components/buttonType.comp';
import InputAktifasi from '../components/inputAktifasi.comp';
import ButtonFilled from '../components/buttonFilled.comp';

import colors from '../utils/colors.utils';

const AktifasiAkun = ({navigation}) => {
  return (
    <View style={styles.aktifasiContainer}>
      <View style={styles.imageContainer}>
        <RoundedImage imageName={'ImageDefault'} size={'25'} />
      </View>
      <ScrollView
        style={styles.formContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.textDetail}>Detail Pengguna</Text>
        <View style={styles.buttonGender}>
          <ButtonType buttonText={'Laki-Laki'} />
          <ButtonType buttonText={'Perempuan'} />
        </View>
        <View style={styles.inputContainer}>
          <InputAktifasi label={'Nama Pengguna'} placeholder={'Input here'} />
          <InputAktifasi label={'Email'} placeholder={'Input here'} />
          <InputAktifasi
            label={'Keahlian'}
            placeholder={'Input here'}
            iconName={'chevron-down'}
            iconColor={colors.neutral}
            iconSize={22}
          />
          <InputAktifasi
            label={'Sub Keahlian'}
            placeholder={'Input here'}
            iconName={'chevron-down'}
            iconColor={colors.neutral}
            iconSize={22}
          />
        </View>
        <Text style={styles.textDetail}>Alamat Asal</Text>
        <View style={styles.inputContainer}>
          <InputAktifasi
            label={'Desa/Kelurahan'}
            placeholder={'Desa/Kelurahan'}
            iconName={'chevron-down'}
            iconColor={colors.neutral}
            iconSize={22}
          />
          <InputAktifasi
            label={'Kota/Kecamatan'}
            placeholder={'Kota/Kecamatan'}
            iconName={'chevron-down'}
            iconColor={colors.neutral}
            iconSize={22}
          />
          <InputAktifasi
            label={'Kabupaten'}
            placeholder={'Kabupaten'}
            iconName={'chevron-down'}
            iconColor={colors.neutral}
            iconSize={22}
          />
        </View>
        <Text style={styles.textDetail}>Upload CV</Text>
        <View style={styles.cvContainer}>
          <View style={styles.docIcon}>
            <Icon name="document-outline" color={colors.neutral} size={22} />
          </View>
          <Text style={styles.textCV}>Ukuran file max 1MB (PDF)</Text>
          <Pressable style={styles.buttonCV}>
            <Text style={styles.textButton}>Upload</Text>
            <Icon name="cloud-upload" color={colors.primary} size={22} />
          </Pressable>
        </View>
      </ScrollView>
      <ButtonFilled
        buttonSize={'90'}
        buttonText={'Aktifkan Akun'}
        buttonColor={colors.primary}
        textColor={colors.white}
        iconName={'arrow-forward'}
        iconColor={colors.white}
        iconSize={22}
        onPress={() => navigation.navigate('Status')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aktifasiContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: hp('5%'),
  },
  formContainer: {
    marginHorizontal: wp('4%'),
    paddingVertical: wp('15%'),
    paddingTop: wp('4%'),
  },
  textDetail: {
    color: colors.neutral,
    fontWeight: '700',
    fontSize: 16,
    paddingTop: wp('2%'),
  },
  buttonGender: {
    flexDirection: 'row',
  },
  inputContainer: {
    alignItems: 'center',
  },
  cvContainer: {
    backgroundColor: colors.primary,
    height: hp('25%'),
    width: wp('90%'),
    alignItems: 'center',
    borderRadius: wp('1%'),
  },
  docIcon: {
    height: wp('18%'),
    width: wp('18%'),
    borderRadius: wp('18%'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('5%'),
  },
  textCV: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 14,
    marginTop: wp('4%'),
  },
  buttonCV: {
    flexDirection: 'row',
    height: wp('10%'),
    backgroundColor: colors.white,
    width: wp('30%'),
    borderRadius: wp('1%'),
    marginTop: wp('4%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textButton: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});

export default AktifasiAkun;
