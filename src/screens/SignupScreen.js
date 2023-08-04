import { View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView, SafeAreaView, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import food from '../../assets/images/good.png'
// import logo from '../../assets/images/logo.png'
import { TextInput } from 'react-native'
import {
    useFonts,
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  } from '@expo-google-fonts/poppins'
// import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native'
import { createUserWithEmailAndPassword }from "firebase/auth";
import { auth } from '../../firebase'



const { height, width } = Dimensions.get('screen')

const SignupScreen = () => { 
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirm_password, setConfirm_password] = useState('')


    //  console.log(process.env.REACT_APP_API_KEY)

    const register = async() => {
      if(email === "" || password === "" || confirm_password === ""){
        Alert.alert(
          "Invalid Details",
          "Please fill all the details",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      }

      if(password !== confirm_password){
        Alert.alert(
          "passwords do not match",
          "Please type the correct password",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
    }

         
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
          if(response){
              console.log(response, 'REGISTERED');
              // const me = response._tokenResponse.email
              // const mee = response.user.email
              // console.log(mee)
          }else{
              console.log('ERROR');
          }
        } catch (error) {
            console.log(error);
        }

  }


      
   

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


//   console.log(process.env.REACT_APP_FIREBASE_API_KEY)
    
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
    <View>
       <Image resizeMode="contain" style={styles.imgStyle} source={food} />
       {/* <Image resizeMode="contain" style={styles.imgStyle} source={logo} /> */}
       <Text style={[styles.largeText]}>{'Sign up \nnow'}</Text>
    </View>


    <View style={[styles.alignCenter]}>
        <View style={{width: width - 50 }}>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                    keyboardType="email-address" 
                    placeholder="Email"
                    defaultValue={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput} 
                />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    placeholder="Password"
                    defaultValue={password}
                    onChangeText={newText => setPassword(newText)}
                    style={styles.textInput} 
                />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                    placeholder="Confirm Password"
                    defaultValue={confirm_password}
                    onChangeText={newText => setConfirm_password(newText)}
                    style={styles.textInput} 
                />
            </View>
        </View>

        <TouchableOpacity
          onPress={register}
            style={{
              width: 300,
              backgroundColor: "#09B44D",
              padding: 10,
              borderRadius: 25,
              marginTop: 200,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>
            Create an account
            </Text>
          </TouchableOpacity>

       

        <View style={[styles.alignCenter, { flexDirection: "row", gap:5, marginVertical: 10 }]}>
            <Text>Already Have an Account?</Text>

            <TouchableOpacity>
                <Text style={{ color: "#2CBC35"}}>Sign In</Text>
            </TouchableOpacity>
       </View>
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F8",
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    imgStyle: {
        height: 100,
        width: 110,
        marginRight: 10,
        // width: 125,
        // height: 45
    },
    largeText: {
        marginTop: 5,
        marginBottom: 25,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: "Poppins_600SemiBold",
        color: "#4A4A4A"
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: "#fff",
        // width: 330,
        height: 45,
        borderRadius: 15,
        paddingLeft: 15,
        borderColor: "#DFE2E5",
        borderWidth: 1
    },
    inputLabel: {
        marginLeft: 5,
        marginVertical: 1,
        color: "#3D3D3D"
    }
})

export default SignupScreen








