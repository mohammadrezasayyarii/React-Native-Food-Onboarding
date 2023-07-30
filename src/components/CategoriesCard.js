import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Icons } from '../utils/data';



// console.log(Icons)

const CategoriesCard = () => {
    
    
    
  return (
    <View style={styles.container}>
    {Icons.map((item, index) => (
        <View
        style={{borderWidth: 1, padding: 5, borderRadius: 7}}
        key={index}
        activeOpacity={0.8}
        onPress={() => setCategoryIndex(index)}>

         <Image source={item.image} style={styles.image} />
        
      </View>

      
    ))}
  </View>
  )
}

export default CategoriesCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        marginRight: 60,
        justifyContent: 'space-evenly',
        gap: 30
    },
    image: {
        // display: "block",        
    }
})