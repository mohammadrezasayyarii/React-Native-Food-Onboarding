import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnboardingSlider = (item) => {

  return (
    <View style={styles.container}>
        <Image resizeMode="contain" source={item.image} style={{ width: 350, height: 270 }} />
        <View style={styles.content}>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
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
  content: {
    marginTop: 60,

  }
})