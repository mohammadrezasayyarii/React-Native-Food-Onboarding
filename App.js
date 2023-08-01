import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgetPassword from './src/screens/ForgetPassword';
import ResetPassword from './src/screens/ResetPassword';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetails from './src/screens/ProductDetails';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="ProductDetails">
        <Stack.Screen name="Splash" component={SplashScreen}  />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen}  />
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Forgetpassword" component={ForgetPassword}  />
        <Stack.Screen name="Resetpassword" component={ResetPassword}  />
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="ProductDetails" component={ProductDetails}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

