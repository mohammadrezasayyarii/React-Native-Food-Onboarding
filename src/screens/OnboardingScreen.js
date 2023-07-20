import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view'
import { data } from '../utils/data';
import OnboardingSlider from '../components/OnboardingSlider';
import { TouchableOpacity } from 'react-native';



const OnboardingScreen = () => {

  return (
    <View style={styles.container}>
      <View>
          <TouchableOpacity style={styles.skipStyle}>
            <Text>Skip</Text>
          </TouchableOpacity>
      </View>

      <View>
          <PagerView style={[styles.viewPager]}  initialPage={0}>
            {data.map(( item, index) => (
              <OnboardingSlider key={index} {...item} /> 
            ))}
          </PagerView>
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
  }
});

export default OnboardingScreen;