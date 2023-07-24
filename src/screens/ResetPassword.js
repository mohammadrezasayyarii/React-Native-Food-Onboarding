import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { TextInput } from 'react-native'

const ResetPassword = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View>
            <Image source={logo} style={styles.imgSrc} />
            <Text>{`Rseset \nPassword`}</Text>
        </View>

        <View>
          <Text>A reset code has been sent to your email</Text>
        </View>

        <View>
          <Text>Enter code</Text>
          <View style={{ flexDirection: 'row'}}>
              <TextInput placeholder="-" />
              <TextInput placeholder="-" />
              <TextInput placeholder="-" />
              <TextInput placeholder="-" />
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
  }

})

export default ResetPassword



