import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors.utils';

const Achievement = () => {
  return (
    <View style={styles.achievementContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Rating</Text>
        <View style={styles.childContainer}>
          <Icon name="star" size={22} color={colors.secondary} />
          <Text>{'0'}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Jumlah Siswa</Text>
        <View style={styles.childContainer}>
          <Icon name="school" size={22} color={colors.primary} />
          <Text>{'0'}</Text>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Review</Text>
        <View style={styles.childContainer}>
          <Icon name="chatbubble-ellipses" size={22} color={colors.primary} />
          <Text>{'0'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  achievementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    backgroundColor: colors.white,
    width: wp('28%'),
    height: hp('7%'),
    borderRadius: wp('1%'),
    alignItems: 'center',
    margin: wp('1.5%'),
  },
  itemTitle: {
    marginTop: wp('1%'),
    marginBottom: wp('1%'),
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('10%'),
  },
});

export default Achievement;
