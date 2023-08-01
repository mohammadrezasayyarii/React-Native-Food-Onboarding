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
import { FlatList } from 'react-native';
import FoodCard from '../components/FoodCard';
import foods from '../utils/data';
import { TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';


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

        {/* <CustomButton text="Get Started" style={{ postion: "absolute", butttom: -100}} /> */}
      
        <FlatList 
          data={foods}
          numColumns={2} 
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between"}}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          renderItem={({item}) => <FoodCard foodData={item} />}
        />
      
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    // paddingVertical: 40,
    // top: -60,
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
  },
  button: {
    backgroundColor: 'red', // Replace with your desired background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonText: {
    color: '#ffffff', // Replace with your desired text color
    fontSize: 16,
    fontWeight: 'bold',
  },
})