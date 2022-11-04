import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = ({headerTitle, headerSubtitle}) => {
  return (
    <View>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      <Text style={styles.headerSubtitle}>{headerSubtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: wp('10%'),
    width: wp('50%'),
  },
  headerSubtitle: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: wp('3.5%'),
    width: wp('70%'),
  },
});

export default Header;
