import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9iu69nca2e9xxBOEdyZZ5MoR_n2EUMBA",
    authDomain: "notitas-app.firebaseapp.com",
    projectId: "notitas-app",
    storageBucket: "notitas-app.appspot.com",
    messagingSenderId: "929234353171",
    appId: "1:929234353171:web:c457cc55868ba6f9dc53e6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);