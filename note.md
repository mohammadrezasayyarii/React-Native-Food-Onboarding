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









// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          dark: "#4A4A4A",
          black: "#000000",
          light_gray: "#DADADA",
          gray_pale: "#2CBC35",
          gray_pale2: "#4A4A4A",
          primary: "#09B44D",
          primary_light: "#41C049",
          primary_pale: "#2CBC35",
          secondary: "#fff"
        },
        fontFamily: {
          poppinsBold: ['poppinsBold'],
          poppinsMedium: ['poppinsMedium'],
          poppinsRegular: ['poppinsRegular'],
          poppinsSemibold: ['poppinsSemibold'],
        },
        // backgroundImage: (theme) => ({
        //   'splash-bg': "url('./assets/images/slpash-bg.png')",
        //   'splash-logo': "url('../../assets/images/logo.png')",
        // }),
      },
    },
    plugins: [],
  } 