import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Input = ({
  label,
  leftIconName,
  rightIconName,
  iconColor,
  iconSize,
  placeholder,
  placeholderTextColor,
  textContentType,
  secureTextEntry,
  onChangeText,
  onBlur,
  value,
  rightIconPress,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.textInputContainer}>
        <Icon name={leftIconName} color={iconColor} size={iconSize} />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          selectionColor={'#FFF'}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        />
        <Icon
          name={rightIconName}
          color={iconColor}
          size={iconSize}
          onPress={rightIconPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: hp('0.5%'),
  },
  inputLabel: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: hp('1%'),
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    height: hp('6%'),
    borderColor: '#FFF',
    borderWidth: 1.5,
    borderRadius: wp('1%'),
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
  },
  textInput: {
    width: wp('55%'),
    color: '#FFF',
    fontSize: 16,
  },
});

export default Input;
