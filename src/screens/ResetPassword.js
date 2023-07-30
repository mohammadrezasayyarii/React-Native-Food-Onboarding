import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

const ResetPassword = () => {
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
      <KeyboardAvoidingView>
        <View>
            <Image source={logo} style={styles.imgSrc} />
            <Text style={styles.forgetText}>{`Reset \nPassword`}</Text>
        </View>

        

        <View style={styles.alignCenter}>
          <View>
            <Text style={styles.resetText}>A reset code has been sent to your email</Text>
          </View>

          <View>
            <Text style={styles.code}>Enter code</Text>
          </View>

          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
               <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1} placeholder='-'/>
            </View>
            <View style={styles.otpBox}>
               <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1} placeholder='-' />
            </View>
            <View style={styles.otpBox}>
               <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1} placeholder='-' />
            </View>
            <View style={styles.otpBox}>
               <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1} placeholder='-' />
            </View>
          </View>
          
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 70,
    paddingHorizontal: 20
  },
  imgSrc: {
    width: 120,
    height: 45,
  },
  forgetText: {
    marginTop: 40,
    marginBottom: 40,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 35,
    color: "#4A4A4A"
  },
  alignCenter: {
    // justifyContent: "center",
    alignItems: "center"
  },
  resetText:{
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    maxWidth: 260,
    textAlign: "center",
    color: "#3D3D3D"
  },
  code: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#3D3D3D"
  },
  inputBox: {
    // backgroundColor: "#fff"
  },
  otpContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    gap: 15
    // backgroundColor: "red"
  },
  otpBox: {
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    shadowOffset: {
      width: 1,
      height: 2,
  },
  shadowOpacity: 0.50,
  shadowRadius: 5,
  elevation: 4,
  },
  otpText: {
    fontSize: 25,
    color: "black",
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  }
}) 

export default ResetPassword





