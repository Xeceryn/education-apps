import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import HeaderHome from '../components/headerHome.comp';
import SearchMentor from '../components/searchMentor.comp';
import ChoiceLearn from '../components/choiceLearn.comp';
import ButtonDonasi from '../components/buttonDonasi.comp';
import colors from '../utils/colors.utils';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <HeaderHome />
      <SearchMentor />
      <ChoiceLearn />
      <ButtonDonasi />
      <LinearGradient
        colors={['#1C8CF4', '#73B3FF']}
        start={{x: 1, y: 0.5}}
        end={{x: 0.5, y: 1}}
        style={{height: hp('60%')}}></LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: wp('4%'),
  },
});

export default Home;
