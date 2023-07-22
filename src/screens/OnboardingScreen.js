import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view'
import { data } from '../utils/data';
import OnboardingSlider from '../components/OnboardingSlider';
import { TouchableOpacity } from 'react-native';
import SliderDot from '../components/SliderDot';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';



const OnboardingScreen = () => {
  const [currentSliderNumber, setCurrentSliderNumber] = useState(0)
  const navigation = useNavigation()
  const carouselRef = useRef(null)


  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>...Loading</Text>;
  }





  const { width, Height } = Dimensions.get('window');

  const nextSlide = () => {
    const nextSlide = currentSliderNumber + 1
    carouselRef.current?.setPage(nextSlide)
  }


  return (
    <View style={styles.container}>
      {currentSliderNumber === 2 ? <View style={{marginTop : 150}}></View> : <View style={{marginBottom: 100, flexDirection: "row"}}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.skipStyle}>Skip</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={nextSlide}>
            <Text style={styles.skipStyle}>Next</Text>
          </TouchableOpacity>
      </View>}
      

      <View>
          <PagerView onPageScroll={
              ({ nativeEvent }) => {
                nativeEvent.position !== currentSliderNumber ? setCurrentSliderNumber(nativeEvent.position) : null
                // if (nativeEvent.position !== currentSliderNumber) setCurrentSliderNumber(nativeEvent.position)
              }} style={[styles.viewPager]} ref={carouselRef}  initialPage={0}>
            {data.map(( item, index) => (
              <OnboardingSlider key={index} {...item} /> 
            ))}
          </PagerView>

          <View style={styles.dotSlider}>
            {data.map((_, index) => (
              <SliderDot key={index} position={ index === currentSliderNumber}  />
            ))}
          </View>
      </View>

      {currentSliderNumber == data.length - 1 ? 
      <View style={styles.button}>
        <CustomButton text="Get Started" />
      </View> : null  }
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  skipStyle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 15,
    color: "#000000",
  },
  viewPager: {
    height: "75%",
  },
  dotSlider: {
    flexDirection: "row", 
    justifyContent: "center",
    marginButtom: 30
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    top: -50
  }
});

export default OnboardingScreen;