import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view'
import { data } from '../utils/data';
import OnboardingSlider from '../components/OnboardingSlider';
import { TouchableOpacity } from 'react-native';
import SliderDot from '../components/SliderDot';



const OnboardingScreen = () => {
  const [currentSliderNumber, setCurrentSliderNumber] = useState(0)

  return (
    <View style={styles.container}>
      <View>
          <TouchableOpacity style={styles.skipStyle}>
            <Text>Skip</Text>
          </TouchableOpacity>
      </View>

      <View>
          <PagerView onPageScroll={
              ({ nativeEvent }) => {
                nativeEvent.position !== currentSliderNumber ? setCurrentSliderNumber(nativeEvent.position) : null
                // if (nativeEvent.position !== currentSliderNumber) setCurrentSliderNumber(nativeEvent.position)
              }} style={[styles.viewPager]}  initialPage={0}>
            {data.map(( item, index) => (
              <OnboardingSlider key={index} {...item} /> 
            ))}
          </PagerView>

          <View style={styles.dotSlider}>
            {data.map((_, index) => (
              <SliderDot key={index} position={ index === currentSliderNumber} />
            ))}
          </View>
      </View>

      
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  skipStyle: {
    position: "absolute",
    right: 10,
  },
  viewPager: {
    height: "75%",
    top: -50,
  },
  dotSlider: {
    top: -45,
    flexDirection: "row", 
    justifyContent: "center"
  }
});

export default OnboardingScreen;