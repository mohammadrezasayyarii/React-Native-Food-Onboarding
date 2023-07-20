import { View, Text, SafeAreaView, Platform, StatusBar, Image, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import plate from '../../assets/images/food-plate.png'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';



const SplashScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboarding")
    }, 2000)
  },[])

  return (
    <SafeAreaView style={style.container}>
        <View style={style.home}>
          <Image style={style.imgSrc} source={logo}  />
        </View>
        <Animatable.Image animation="fadeInUp" duration={1000} easing="ease-in" iterationCount={1} source={plate} />
    </SafeAreaView>
  )
}

export default SplashScreen


const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#09B44D",
        paddingTop: 10
    },
    home: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40
    },
    imgSrc : {
        marginTop: 200,
        width: 150,
        // height: 40
    }

    
})