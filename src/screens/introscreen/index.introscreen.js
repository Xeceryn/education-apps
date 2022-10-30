import React from 'react';
import {
  StatusBar,
  ImageBackground,
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import getImageByName from '../../utils/images.utils';
import strings from '../../utils/strings.utils';

const IntroScreen = () => {
  var slider = React.useRef(AppIntroSlider);
  const prevButton = index => {
    if (index === 1) {
      slider?.goToSlide(0, true);
    } else if (index === 2) {
      slider?.goToSlide(1, true);
    }
  };
  const nextButton = index => {
    if (index === 0) {
      slider?.goToSlide(1, true);
    } else if (index === 1) {
      slider?.goToSlide(2, true);
    } else if (index === 2) {
      // goto Login
    }
  };
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
  renderPagination = activeIndex => {
    return (
      <View style={styles.bottomContent}>
        <View style={styles.prevButton}>
          {/* Hilangkan tombol kembali jika index 0 */}
          <Pressable
            style={styles.button}
            onPress={() => prevButton(activeIndex)}>
            <Image source={getImageByName('arrowLeft')} style={styles.arrow} />
            <Text style={styles.buttonText}>Kembali</Text>
          </Pressable>
        </View>
        <View style={styles.paginationContainer}>
          <View style={styles.paginationDots}>
            {strings.slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.paginationItem,
                  i === activeIndex
                    ? {backgroundColor: '#fff'}
                    : {backgroundColor: '#004D95'},
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.nextButton}>
          <Pressable
            style={styles.button}
            onPress={() => nextButton(activeIndex)}>
            <Text style={styles.buttonText}>Lanjut</Text>
            <Image source={getImageByName('arrowRight')} style={styles.arrow} />
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={strings.slides}
      renderItem={renderItem}
      renderPagination={renderPagination}
      ref={ref => {
        slider = ref;
      }}
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
  bottomContent: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: hp('3%'),
    alignContent: 'center',
  },
  paginationContainer: {
    left: wp('17%'),
  },
  paginationDots: {
    height: hp('1%'),
    margin: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationItem: {
    width: wp('2%'),
    height: hp('1.3%'),
    borderRadius: wp('2%'),
    marginHorizontal: wp('1.3%'),
  },
  prevButton: {
    left: wp('5%'),
  },
  nextButton: {
    left: wp('30%'),
  },
  button: {
    height: hp('5%'),
    width: wp('23%'),
    backgroundColor: '#FFE457',
    borderRadius: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#007DF1',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 12,
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
  },
  arrow: {
    marginVertical: hp('1%'),
    tintColor: '#007DF1',
    marginHorizontal: wp('1%'),
  },
});

export default IntroScreen;
