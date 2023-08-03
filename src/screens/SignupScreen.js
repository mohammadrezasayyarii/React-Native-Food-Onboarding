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
import CustomButton from '../components/CustomButton'
import { TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const { height, width } = Dimensions.get('screen')

const SignupScreen = () => { 
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [confirm_password, setConfirm_password] = useState('')



     const user = {
        email,
        password,
        confirm_password
     }


    //  console.log(user)



    const register = async() => {
        if(email === "" || password === "" || phone === ""){
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

    try {
        const auth = getAuth();
        const userCredential = createUserWithEmailAndPassword(auth, email, password)

        const user = userCredential.user;
    } catch (error) {
        console.log(error)
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




// import React from 'react'
// import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput } from 'react-native'
// import CustomButton from '../components/CustomButton'
// import logo from '../../assets/images/logo.png'

// const { height, width } = Dimensions.get('screen')

// const SignupScreen = ({ navigation }) => {
//     return (
//         <View style={styles.container} >
//             <View>
//                 <Image resizeMode="contain" style={styles.imgStyle} source={logo} />
//                 <Text style={[styles.largeText, { marginTop : 20 }]} > {'Sign up \n now'} </Text>
//             </View>
//             <View style={styles.alignCenter} >
//                 <View style={{ width: width - 50 }} >
//                     <View style={{ marginVertical: 10 }} >
//                         <Text style={styles.textInputLabel} > Email Address </Text>
//                         <TextInput keyboardType="email-address" style={styles.textInput} placeholder="Enter email" />
//                     </View>

//                     <View style={{ marginVertical: 10 }} >
//                         <Text style={styles.textInputLabel} > Password </Text>
//                         <TextInput secureTextEntry style={styles.textInput} placeholder="Enter email" />
//                     </View>

//                     <View style={{ marginVertical: 10 }} >
//                         <Text style={styles.textInputLabel} > Confirm Password </Text>
//                         <TextInput secureTextEntry style={styles.textInput} placeholder="Enter email" />
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.alignCenter} >
//                 <TouchableOpacity style={{ marginBottom: 30 }} onPress={() => console.warn('Google Login Not Implemented!!!')} >
                    
//                     <View style={[styles.googleBtn, styles.alignCenter, {flexDirection : "row"}]} >
//                      <Image style={styles.imgIcon} resizeMode={'contain'} source={logo} />
                        
//                         <Text> Sign up with Google </Text>
//                     </View>
//                 </TouchableOpacity>

//                 <CustomButton buttonHandler={() => console.warn("Home screen not implemented")} text="Create an account" />

//                 <View style={styles.rowFlex} >
//                     <Text> Already have an account? </Text>

//                     <TouchableOpacity onPress={() => navigation.navigate('login')} >
//                         <Text style={{ color: "#2CBC35" }} > Sign In </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default SignupScreen

// const styles = StyleSheet.create({
//     rowFlex: {
//         flexDirection: 'row'
//     },
//     imgIcon: {
//         height: 25,
//         width: 25,
//         marginRight : 10
//     },
//     textInputLabel: {
//         fontSize: 13,
//         marginBottom: 10,
//         marginLeft: 10
//     },
//     textInput: {
//         backgroundColor: '#fff',
//         borderColor: '#DFE2E5',
//         borderWidth: 1,
//         height: 45,
//         paddingLeft: 15,
//         borderRadius: 15
//     },
//     largeText: {
//         fontSize: 30,
//         fontWeight: '600'
//     },
//     title: {
//         fontWeight: '700',
//         fontSize: 22,
//         paddingVertical: 10
//     },
//     text: {
//         fontSize: 14
//     },
//     container: {
//         height,
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         paddingVertical: 20,
//         paddingHorizontal: 20
//     },
//     imgStyle: {
//         height: 100,
//         width: 150
//     },
//     alignCenter: {
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     googleBtn: {
//         height: 45,
//         width: 200,
//         borderRadius: 20,
//         borderColor: '#fff',
//         backgroundColor: '#fff',
//         borderWidth: 1
//     },
//     button: {
//         height: 45,
//         width: 300,
//         borderRadius: 20,
//         borderColor: '#2CBC35',
//         backgroundColor: '#2CBC35',
//         borderWidth: 1
//     }
// })





