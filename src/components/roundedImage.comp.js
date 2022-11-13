import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import getImageByName from '../utils/images.utils';

const RoundedImage = ({imageName, size}) => {
  return (
    <View>
      <Image
        source={getImageByName(imageName)}
        style={styles.roundedImage(size)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  roundedImage: size => ({
    width: wp(`${size}%`),
    height: wp(`${size}%`),
    borderRadius: wp(`${size}%`),
  }),
});

export default RoundedImage;
