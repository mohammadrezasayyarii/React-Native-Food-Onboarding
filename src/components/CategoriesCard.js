import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Icons } from '../utils/data';



// console.log(Icons)

const CategoriesCard = () => {
    const [catergoryIndex, setCategoryIndex] = useState(0);
    
    
  return (
    <View style={styles.container}>
    {Icons.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)}>
            <View
                style={[styles.imageContainer, catergoryIndex === index && styles.categoryBorderSelected, ]}
                activeOpacity={0.8}>

                <Image source={item.image} style={styles.image} />
            </View>
        </TouchableOpacity> 
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
    imageContainer: {
        borderWidth: 2, 
        padding: 7, 
        borderRadius: 7,
        borderColor: "#C5C5C5"
    },
    categoryBorderSelected: {
        borderColor: "#41C049"
    },
    image: {
        // display: "block",        
    },
    categoryImageSelected: {
        // color: "green"
    }
})