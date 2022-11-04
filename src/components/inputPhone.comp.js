import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const InputPhone = ({label, placeholder}) => {
  return (
    <View style={styles.inputPhoneContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.textInputContainer}>
        <View style={styles.countrySelect}>
          <Icon name="phone-portrait" color={'#FFF'} size={22} />
          <Text style={styles.contryCodeText}>{'+62'}</Text>
          <Icon name="chevron-down" color={'#FFF'} size={22} />
        </View>
        <View style={styles.inputPhone}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={'#FFF'}
            selectionColor={'#FFF'}
            keyboardType={'phone-pad'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPhoneContainer: {
    marginTop: hp('0.5%'),
  },
  inputLabel: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: hp('1%'),
  },
  textInputContainer: {
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countrySelect: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: '#FFF',
    borderRadius: wp('1%'),
    borderWidth: 1.5,
    width: wp('30%'),
    height: hp('6%'),
  },
  contryCodeText: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 14,
  },
  inputPhone: {
    borderColor: '#FFF',
    borderRadius: wp('1%'),
    borderWidth: 1.5,
    width: wp('47%'),
    height: hp('6%'),
  },
  textInput: {
    width: wp('55%'),
    color: '#FFF',
    fontSize: 14,
  },
});

export default InputPhone;
