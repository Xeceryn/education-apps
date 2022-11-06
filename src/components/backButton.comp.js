import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors.utils';

const BackButton = ({onPress}) => {
  return (
    <View style={styles.backButtonContainer}>
      <Pressable style={styles.pressContainer} onPress={onPress}>
        <Icon name="chevron-back" color={colors.white} size={26} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
  },
  pressContainer: {
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
  },
});

export default BackButton;
