import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SliderDot = () => {

  return (
    <View style={styles.dot}>

    </View>
  )
}


const styles = StyleSheet.create({
    dot: {
        width: 20,
        height: 4,
        borderRadius: 7,
        marginHorizontal: 3,
        backgroundColor: "#000000"
    }
})

export default SliderDot