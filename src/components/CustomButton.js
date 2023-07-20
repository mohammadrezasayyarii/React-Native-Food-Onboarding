import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 15,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09B44D",
    },
    text: {
        color: "white"
    }

})

export default CustomButton