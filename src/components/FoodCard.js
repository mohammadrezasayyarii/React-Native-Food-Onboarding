import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const FoodCard = ({ foodData }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconConatiner}>
        <View style={styles.topIcon}>
            <FontAwesome name="dot-circle-o" size={24} color="#09B44D" />
            <AntDesign name="heart" size={24} color="#FF0000" />
        </View>

        <Image source={foodData.img} style={{width: 120, height: 120, marginTop: 10}} />




        <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
          <View style={{marginTop: 3}}>
            <Text>{foodData.name}</Text>
            <Text>{foodData.price}</Text>
          </View>
          <AntDesign name="pluscircle" size={24} color="#2CBC35" />
        </View>
      </View>
    </View> 
  )
}

export default FoodCard

const styles = StyleSheet.create({
    card: {
        borderWidth: 1.5,
        borderColor: "#C5C5C5",
        height: 217,
        width: 156,
        marginBottom: 20,
        borderRadius: 10,
        marginHorizontal: 2,
    },
    iconConatiner:{
        paddingHorizontal: 12, 
        paddingVertical: 10
    },
    topIcon: {
        flexDirection: 'row', 
        justifyContent: "space-between",   
    },

})