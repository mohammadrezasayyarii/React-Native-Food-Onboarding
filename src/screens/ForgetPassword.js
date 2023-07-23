import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { TextInput } from 'react-native'
import CustomButton from '../components/CustomButton'


const ForgetPassword = () => {
  return (
    <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.imgSrc} />
          <Text style={styles.welcomeText}>{`Forget \n password ?`}</Text>
        </View>

        <View>
         <Text>Enter your email address to request a password reset.</Text> 
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
  welcomeText:{
   
  },
})

export default ForgetPassword