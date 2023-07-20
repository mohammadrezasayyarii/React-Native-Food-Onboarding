import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view'
import { data } from '../utils/data';
import OnboardingSlider from '../components/OnboardingSlider';



const OnboardingScreen = () => {



  return (
    <View style={{ flex: 1 }}>
      <PagerView style={[styles.viewPager, { height: "75%" }]}  initialPage={0}>

        {data.map(( item, index) => (
          <OnboardingSlider key={index} {...item} /> 
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;