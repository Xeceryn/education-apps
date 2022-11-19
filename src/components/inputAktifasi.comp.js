import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import colors from '../utils/colors.utils';

const InputAktifasi = ({label, placeholder, iconName, iconSize, iconColor}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.input}>
        <TextInput placeholder={placeholder} />
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: hp('0.5%'),
  },
  inputLabel: {
    color: colors.neutral,
    fontWeight: '400',
    fontSize: 16,
    marginBottom: hp('1%'),
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: colors.neutral,
    width: wp('90%'),
    height: hp('6%'),
    borderRadius: wp('1%'),
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
  },
});

export default InputAktifasi;
