import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const ResetPassword = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4:""})

  
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
            <Text style={styles.resetText}>
              A reset code has been sent to your email
            </Text>
          </View>

          <View>
            <Text style={styles.code}>Enter code</Text>
          </View>

          <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                placeholder="-"
                ref={firstInput}
                onChangeText={(text) => {
                    setOtp({...otp, 1: text})
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                placeholder="-"
                ref={secondInput}
                onChangeText={(text) => {
                    setOtp({...otp, 2: text})
                  text ? thirdInput.current.focus() : firstInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                placeholder="-"
                ref={thirdInput}
                onChangeText={(text) => {
                      setOtp({...otp, 3: text})
                    text ? fourthInput.current.focus() : secondInput.current.focus()
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                placeholder="-"
                ref={fourthInput}
                onChangeText={(text) => {
                    setOtp({...otp, 4: text})
                  !text && thirdInput.current.focus();
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 70,
    paddingHorizontal: 20,
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
    color: "#4A4A4A",
  },
  alignCenter: {
    // justifyContent: "center",
    alignItems: "center",
  },
  resetText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    maxWidth: 260,
    textAlign: "center",
    color: "#3D3D3D",
  },
  code: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#3D3D3D",
  },
  otpContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    backgroundColor: "#f0f0f0",
  },
  otpBox: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    boxShadow: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  otpText: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});

export default ResetPassword;
