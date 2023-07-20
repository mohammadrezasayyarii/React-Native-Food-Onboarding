import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const OnboardingSlider = (item) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
        <Image resizeMode="contain" source={item.image} style={{ width: 350, height: 270 }} />
        <View style={{ marginTop: 20, }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
    </View>
  )
}

export default OnboardingSlider

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: "center",
  },
  content: {
    maxWidth: 250,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins-Regular"
  }
})