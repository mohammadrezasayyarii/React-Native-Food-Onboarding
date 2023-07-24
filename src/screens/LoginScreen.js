import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, KeyboardAvoidingView, Dimensions } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
// import food from '../../assets/images/good.png'
import google from '../../assets/images/google.png'
import CustomButton from '../components/CustomButton'
import {
    useFonts,
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  } from '@expo-google-fonts/poppins'
import { TouchableOpacity } from 'react-native'



const { width, height } = Dimensions.get('screen')

const LoginScreen = () => {


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
        <KeyboardAvoidingView>
            <View>
                <Image resizeMode="contain" source={logo} style={styles.imgSrc} />
                {/* <Image resizeMode="contain" source={food} style={styles.imgSrc} /> */}
                <Text style={styles.welcomeText}>{`Welcome \nback`}</Text>
            </View>


            <View style={styles.formContainer}>
                <View style={styles.formInput}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput placeholder='Enter Email' style={styles.inputText} />
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder='Password' style={styles.inputText} />
                </View>  
            </View>
        

            <View style={styles.alignCenter}>
                <View style={styles.Social}>
                    <Image source={google} style={styles.googleBtn} />
                    <Text>Sign up with Google</Text>
                </View>

                <View>
                  <CustomButton text="Sign In" />
                </View>

                <View style={styles.Register}>
                    <Text>Don’t have an account?</Text>

                    <TouchableOpacity>
                        <Text>Sign Up</Text>
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
        justifyContent: "space-between",
        backgroundColor:  "#F5F5F8",
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    imgSrc: {
        width: 125,
        height: 45
        // height: 100,
        // width: 110,
        // marginRight: 10
    },
    welcomeText:{
        marginTop: 45,
        fontWeight: 600,
        fontSize: 35,
        color: "#4A4A4A",
        fontFamily: "Poppins_600SemiBold",
        marginBottom: 15,
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 130
    },
    formInput: {
        paddingVertical: 14,
    },
    label: {
        paddingVertical: 5,
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Social: {
        gap: 5,
        backgroundColor: "#F5F5F8",
        borderColor: "#DFE2E5",
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: width - 150,
        height: 45,
        marginBottom: 40

    },
    googleBtn: {
        width: 24,
        height: 24,
    },
    inputText:{
        backgroundColor: "#F5F5F8",
        borderColor: "#DFE2E5",
        borderRadius: 10,
        borderWidth: 1,
        width: width - 50,
        paddingLeft: 10,
        height: 45, 
    },
    Register: {
        marginTop: 10,
        flexDirection: "row",
        gap: 5,
    }


})

export default LoginScreen