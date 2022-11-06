import React, {useRef, useState} from 'react';
import {View, TextInput, Pressable, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../utils/colors.utils';

const InputOtp = ({code, setCode, maximumLength, setIsOtpReady}) => {
  const boxArray = new Array(maximumLength).fill(0);
  var inputRef = useRef();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const boxDigit = (_, index) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <View
        style={[
          isInputBoxFocused && isValueFocused
            ? styles.splitBoxesFocused
            : styles.splitBoxes,
        ]}
        key={index}>
        <Text style={styles.splitBoxText}>{digit}</Text>
      </View>
    );
  };
  return (
    <View style={styles.inputOtpContainer}>
      <Pressable style={styles.splitBoxContainer}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        style={styles.textInputHidden}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType={'number-pad'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputOtpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90%'),
    backgroundColor: colors.white,
    height: hp('10%'),
    borderRadius: wp('1%'),
  },
  splitBoxContainer: {
    width: wp('20%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInputHidden: {
    borderColor: colors.grey,
    backgroundColor: colors.grey,
    borderWidth: 1,
    borderRadius: wp('1%'),
    padding: wp('2%'),
    marginTop: hp('2%'),
    position: 'absolute',
    opacity: 0,
    width: wp('90%'),
    height: hp('9%'),
  },
  splitBoxes: {
    borderColor: colors.grey,
    backgroundColor: colors.grey,
    borderWidth: 2,
    borderRadius: wp('1%'),
    padding: wp('3%'),
    margin: wp('1%'),
    width: wp('12%'),
    height: hp('6%'),
  },
  splitBoxesFocused: {
    borderColor: '#ecdbba',
    backgroundColor: '#E6E6E6',
  },
  splitBoxText: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.neutral,
  },
});

export default InputOtp;
