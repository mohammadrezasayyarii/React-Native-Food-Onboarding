import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const CustomButton = ({ buttonHandler, text }) => {
  return (
    <TouchableOpacity onPress={() => buttonHandler()}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
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