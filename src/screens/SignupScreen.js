import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import food from '../../assets/images/good.png'
import { TextInput } from 'react-native'
import { Button } from 'react-native'




const SignupScreen = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        comfirm_password: "",
    })
    

  
    const { email, password, comfirm_password } = formData


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            name: [value]
        }))
        // setFormData({ ...forValue, name: [value]})
    }


  return (
    <View style={styles.container}>
       <View>
          <Image resizeMode="contain" style={styles.imgStyle} source={food} />
          <Text style={[styles.largeText]}>{'Sign up \n now'}</Text>
       </View>


       <View style={styles.alignCenter}>
           <TextInput
                name="email"
                value={email}
                placeholder="Email"
                onChangeText={handleChange}
            />
            <TextInput
                name="password"
                value={password}
                placeholder="Password"
                onChangeText={handleChange}
            />
            <TextInput
                name="confirm_password"
                value={comfirm_password}
                placeholder="Confirm Password"
                onChangeText={handleChange}
            />
            <Button title="Submit" />
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
        width: 150
    },
    largeText: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 800,
        // fontFamily: "myfont",
        color: "#4A4A4A"
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SignupScreen