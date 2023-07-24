import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
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

  const { height, width } = Dimensions.get('screen')

const SignupScreen = () => { 
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirm_password: ""
      })
     

      const { email, password, confirm_password } = formData
    

      const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        // setFormData({...prevData, [name]: value}) 
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



    
  return (
    <View style={styles.container}>
    <View>
       <Image resizeMode="contain" style={styles.imgStyle} source={food} />
       {/* <Image resizeMode="contain" style={styles.imgStyle} source={logo} /> */}
       <Text style={[styles.largeText]}>{'Sign up \nnow'}</Text>
    </View>


    <View style={[styles.alignCenter, { flex: 1}]}>
        <View style={{width: width - 50 }}>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                    keyboardType="email-address" 
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChangeText={handleChange}
                    style={styles.textInput} 
                />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                name="password"
                value={password}
                placeholder="Password"
                onChangeText={handleChange}
                style={styles.textInput} 
                />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                name="confirm_password"
                value={confirm_password}
                placeholder="Confirm Password"
                onChangeText={handleChange}
                style={styles.textInput} 
                />
            </View>
        </View>
    </View>


    <View style={styles.alignCenter}>
      <CustomButton  text="Create an account" />
    </View>


    <View style={[styles.alignCenter, { flexDirection: "row", gap:5, marginVertical: 10 }]}>
        <Text>Already Have an Account?</Text>

        <TouchableOpacity>
            <Text style={{ color: "#2CBC35"}}>Sign In</Text>
        </TouchableOpacity>
    </View>
 </View>
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
        marginTop: 30,
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
        // marginVertical: 5,
        color: "#3D3D3D"
    }
})

export default SignupScreen





