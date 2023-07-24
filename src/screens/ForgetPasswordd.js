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

const ForgetPasswordd = () => {
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


        <View style={{marginVertical: 20}}>
          <View style={styles.reset}>
            <Text style={styles.resetText}>Enter your email address to request a password reset.</Text> 
          </View>

          <View>
            <Text style={styles.forgetText}>Email Address</Text>
            <TextInput style={styles.formInput} placeholder='Enter email' />
          </View>
        </View>

        


        <View style={styles.alignCenter}>
          <CustomButton  text="Continue" />
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
  },
  resetText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  forgetText: {
    marginBottom: 5,
    paddingHorizontal: 15,

  },
  formInput: {
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    width: width - 60,
    paddingHorizontal: 15,
    height: 35,
    borderRadius: 12
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center',

  }
})

export default ForgetPasswordd