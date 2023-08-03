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
            <Text style={{ fontWeight: 700, color: "#09B44D", fontSize: 20}}>$100.00</Text>
          </View>

          <View style={{marginTop: 30}}>
            <Text style={styles.recipi}>Recipe</Text>
            <Text style={{ marginVertical: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi element <Text style={styles.highlight}>more..........</Text></Text>

            <View>
              <View style={{ flexDirection: "row", gap: 20, marginVertical: 15, alignItems: "center", alignContent: "center",}}>
                <View style={styles.heartBorder}>
                  <Foundation name="heart" size={24} color="#9F9F9F" />
                </View>
                  
                  <View>
                    <Text style={styles.heartText}>Location</Text>
                    <Text style={styles.heartsubText}>Lorem ipsum dolor sit amr</Text>
                  </View>
              </View>

              <View style={{ flexDirection: "row", gap: 20}}>
                <View style={styles.heartBorder}>
                  <Foundation name="heart" size={24} color="#9F9F9F" />
                </View>
                <View>
                    <Text style={styles.heartText}>Delivery Time</Text>
                    <Text style={styles.heartsubText}>30 minutes</Text>
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
    fontFamily: "Poppins_500Medium"
  },
  recipi: {
    fontFamily: "Poppins_500Medium",
    fontWeight: 700,
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.50)",
  },
  highlight: {
    color: "#2CBC35"
  },
  heartBorder: {
    borderColor: "#9F9F9F", 
    borderRadius: 10, 
    borderWidth: 1, 
    width: 45,  
    height: 40, 
    justifyContent: 'center', 
    alignItems: "center"
  },
  heartText:{
    fontSize: 20, 
    fontWeight: 700, 
    color: "rgba(0, 0, 0, 0.50)",
  },
  heartsubText: {
    color: "rgba(74, 74, 74, 0.38)",
    fontSize: 15,
    fontWeight: 600,
  }

})