import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCi3fHF2llS8w4HPF1t4acdgauDe2nnUL8",
    authDomain: "food-app-onboarding.firebaseapp.com",
    projectId: "food-app-onboarding",
    storageBucket: "food-app-onboarding.appspot.com",
    messagingSenderId: "968153525692",
    appId: "1:968153525692:web:687a9a3b0a056f9bda8fb9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
