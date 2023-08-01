import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import Details from '../../assets/images/details.png'


const ProductDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>

        <View>
          <Image source={Details} style={styles.imgSrc} />
          <View style={styles.iconContainer}>
            <SimpleLineIcons name="arrow-left" size={24} color="#FFFFFF" style={{flex: 1}}/>
            <AntDesign name="heart" size={24} color="#FFFFFF" />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text>Rice</Text>
        </View>





      </View>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#C5C5C5",
  },
  imgSrc: {
    width: 385,
    height: 350,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  iconContainer: {
    flex: 1, 
    flexDirection: "row", 
    position: "absolute", 
    top: 300, 
    paddingHorizontal: 20
  },
  contentContainer: {
    
  }
  
    
})