import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors.utils';

const SearchMentor = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.textSearch}>
        <TextInput placeholder="Cari Mentor matematika" />
      </View>
      <View style={styles.buttonSearch}>
        <Icon name="search" size={30} color={colors.white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.white,
    margin: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: wp('1%'),
    elevation: wp('2%'),
  },
  textSearch: {
    marginLeft: wp('4%'),
  },
  buttonSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: wp('1%'),
    width: wp('12%'),
  },
});

export default SearchMentor;
