import React from 'react';
import {
  StatusBar,
  ImageBackground,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import getImageByName from '../../utils/images.utils';
import strings from '../../utils/strings.utils';
import colors from '../../utils/colors.utils';

const IntroScreen = () => {
  var slider = React.useRef(AppIntroSlider);
  const renderItem = ({item}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          source={getImageByName(item.main)}
          style={styles.mainbackground}>
          <View style={styles.conContent}>
            <Image source={getImageByName(item.content)} />
            <View style={styles.conText}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.bottomButton}>
        <Icon name="arrow-back-outline" color={colors.primary} size={24} />
        <Text style={styles.buttonText}>Kembali</Text>
      </View>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={styles.bottomButton}>
        <Text style={styles.buttonText}>Lanjut</Text>
        <Icon name="arrow-forward-outline" color={colors.primary} size={24} />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.bottomButton}>
        <Text style={styles.buttonText}>Lanjut</Text>
        <Icon name="arrow-forward-outline" color={colors.primary} size={24} />
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={strings.slides}
      ref={ref => {
        slider = ref;
      }}
      renderItem={renderItem}
      showPrevButton
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      // onDone={}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainbackground: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'center',
  },
  conContent: {
    marginHorizontal: wp('25%'),
  },
  conText: {
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    textAlign: 'center',
  },
  bottomButton: {
    backgroundColor: colors.secondary,
    width: wp('25%'),
    height: hp('5%'),
    borderRadius: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
  },
});

export default IntroScreen;
