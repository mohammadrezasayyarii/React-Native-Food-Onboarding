import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnboardingSlider = (item) => {

  

  return (
    <View styles={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image resizeMode="contain" source={item.image} style={{ width: 350, height: 270 }} />
    </View>
  )
}

export default OnboardingSlider

const styles = StyleSheet.create({})