import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderHome from '../components/headerHome.comp';
import SearchMentor from '../components/searchMentor.comp';
import ChoiceLearn from '../components/choiceLearn.comp';
import ButtonDonasi from '../components/buttonDonasi.comp';
import colors from '../utils/colors.utils';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <HeaderHome />
      <SearchMentor />
      <ChoiceLearn />
      <ButtonDonasi />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Home;
