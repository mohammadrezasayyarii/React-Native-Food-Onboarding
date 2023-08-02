import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import Details from '../../assets/images/details.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'


const ProductDetails = () => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

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
          <View>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center"}}>
              <Text style={styles.food}>Rice</Text>
              <FontAwesome5 name="dot-circle" size={15} color="#2CBC35" style={{flex: 1}} />
              <Text>Add</Text>
            </View>
            <Text style={{ fontWeight: 700, color: "#09B44D", fontSize: 20}}>$100</Text>
          </View>

          <View>
            <Text>Recipe</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementc more..........</Text>

            <View>
              <View style={{ flexDirection: "row", gap: 30, marginBottom: 15}}>
                <View style={{  borderWidth: 1, width: 60,  height: 40, justifyContent: 'center', alignItems: "center" }}>
                  <Foundation name="heart" size={24} color="black" />
                </View>
                <View>
                    <Text>ProductDetails</Text>
                    <Text>Lorem ipsum dolor sit amr</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row", gap: 30}}>
                <View style={{  borderWidth: 1, width: 60,  height: 40, justifyContent: 'center', alignItems: "center" }}>
                  <Foundation name="heart" size={24} color="black" />
                </View>
                <View>
                    <Text>ProductDetails</Text>
                    <Text>Lorem ipsum dolor sit amr</Text>
                </View>
              </View>
            </View>


          </View>

          
          
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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  food: {
    color: "rgba(0, 0, 0, 0.50)",
    fontSize: 25,
    fontWeight: 700,
    fontFamily: ""
  }
  
    
})