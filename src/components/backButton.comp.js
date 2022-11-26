import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({onPress, iconColor, buttonLabel}) => {
  return (
    <View style={styles.backButtonContainer}>
      <Pressable style={styles.pressContainer} onPress={onPress}>
        <Icon name="chevron-back" color={iconColor} size={26} />
        <Text style={styles.label(iconColor)}>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
  },
  pressContainer: {
    width: wp('35%'),
    height: hp('6%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: color => ({
    color: color,
    fontWeight: '700',
    fontSize: 16,
  }),
});

export default BackButton;
