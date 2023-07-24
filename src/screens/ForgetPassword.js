import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { TextInput } from 'react-native'
import CustomButton from '../components/CustomButton'
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

const { width, height } = Dimensions.get('screen')

const ForgetPassword = () => {
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
    <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.imgSrc} />
          <Text style={styles.passwordText}>{`Forget \npassword ?`}</Text>
        </View>

        <View style={styles.reset}>
         <Text style={styles.resetText}>Enter your email address to request a password reset.</Text> 
        </View>


        <View>
           <Text>Forget Password</Text>
           <TextInput placeholder='Enter Email' />
        </View>

        <View style={styles.alignCenter}>
          <CustomButton  text="Create an account" />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F8",
    justifyContent: "space-between",
    paddingVertical: 70,
    paddingHorizontal: 20,
    flexDirection: "column"
  },
  imgSrc: {
    width: 125,
    height: 45,
  },
  passwordText:{
    marginTop: 60,
    fontSize: 35,
    fontWeight: 600,
    color: "#4A4A4A",
    fontFamily: "Poppins_600SemiBold"
  },
  reset: {
    width: width - 110,
    marginLeft: 40,
    top: -50
  },
  resetText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  }
})

export default ForgetPassword