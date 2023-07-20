import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SliderDot = ({ position }) => {

  return (
    <View style={[styles.dot, {backgroundColor: position ? "#000000" : "#ffffff"}]}>

    </View>
  )
}


const styles = StyleSheet.create({
    dot: {
        width: 20,
        height: 4,
        borderRadius: 7,
        marginHorizontal: 3,
    }
})

export default SliderDot