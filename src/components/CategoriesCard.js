import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const CategoriesCard = () => {
    
    
    const categories = [""]
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome5 name="home" size={24} color="black" />
      </View>
      <View>
        <FontAwesome5 name="home" size={24} color="black" />
      </View>
      <View>
        <FontAwesome5 name="home" size={24} color="black" />
      </View>
      <View>
        <FontAwesome5 name="home" size={24} color="black" />
      </View>
      <View>
        <FontAwesome5 name="home" size={24} color="black" />
      </View>
    </View>
  )
}

export default CategoriesCard

const styles = StyleSheet.create({
    container: {

    }
})