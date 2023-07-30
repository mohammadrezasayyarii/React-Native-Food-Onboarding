import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons, Feather, AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import CategoriesCard from '../components/CategoriesCard';

const HomeScreen = () => {

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
      <View style={styles.header}>
        <View style={styles.vector}>
          <Feather name="align-left" size={35} color="black" />
          <EvilIcons name="search" size={35} color="black" />
        </View>

        <View style={styles.work}>
          <Text style={styles.text}>Work Place</Text>
          <AntDesign name="caretdown" size={26} color="#454745" />
        </View>
        
        <Text style={styles.choose}>Choose your delicious food</Text>
        
        <View>
          <CategoriesCard />
        </View>
        


      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingVertical: 40,
    backgroundColor: "#DFDFDF"
  },
  header: {
    marginTop: 80,
  },
  vector: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  work: {
    flexDirection: "row",
    gap: 5,
    marginTop: 25
  }, 
  text: {
    color: "#000000",
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    fontWeight: 500
  },
  choose: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    fontWeight: 600
  }
  

})