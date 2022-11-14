import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import getImageByName from '../utils/images.utils';
import colors from '../utils/colors.utils';

const ChoiceLearn = () => {
  return (
    <View style={styles.choiceContainer}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={getImageByName('Bag')} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Privat Mentor</Text>
          <Text style={styles.subtitle}>Belajar dirumah dengan mentor</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={getImageByName('Bag')} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Kelas Online</Text>
          <Text style={styles.subtitle}>Ambil kelas online dengan mentor</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  choiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('4%'),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: wp('1%'),
    width: wp('45%'),
    height: wp('25%'),
  },
  image: {
    width: wp('10%'),
    height: wp('10%'),
  },
  textContainer: {
    width: wp('30%'),
    marginLeft: wp('2%'),
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.neutral,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 10,
    color: colors.neutral,
  },
});

export default ChoiceLearn;
