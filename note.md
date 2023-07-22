1. Adding tailwind to react native

- yarn add nativewind
- yarn add --dev tailwindcss@3.3.2






2. Setup Tailwind CSS
- Run npx tailwindcss init to create a tailwind.config.js file

// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}






3. Add the Babel plugin

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};








4. Thats it 🎉

import { StatusBar } from 'expo-status-bar';
import React from 'react';
+ import { Text, View } from 'react-native';

export default function App() {
  return (
+   <View className="flex-1 items-center justify-center bg-red-500">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}






4. Adding font To expo Project

- Installation
npm i @expo-google-fonts/poppins


npx expo install @expo-google-fonts/poppins expo-font 



import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';




const OnboardingScreen = () => {
  const [currentSliderNumber, setCurrentSliderNumber] = useState(0)
  const navigation = useNavigation()
  const carouselRef = useRef(null)


  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>...Loading</Text>;
  }

}





4.1 Method two expo font

import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });



  if (!fontsLoaded) {
    return null;
  }


   if (!fontsLoaded) {
    return <Text>....Laoding</Text>;
  }
}


