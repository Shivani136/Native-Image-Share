//import Firebase from 'firebase';
import Firebase from "firebase/app";
//import firebase from 'firebase/compat/app';
import "firebase/storage";
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth';
//const app = initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyAtmaMju2wGQp82epp9AOTZ7TxvMkWyVfg",
    databaseURL: "https://fir-native-app-67731-default-rtdb.firebaseio.com",
    projectId: "fir-native-app-67731",
    appId: "1:780907824967:android:d2f7e6729146451474ae62",
};



// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
//   });


// if (!Firebase.apps.length) {
//     Firebase.initializeApp(firebaseConfig);
//   }
//   const app = initializeApp(firebaseConfig);
  
//  export { app,firebase };
  

export default Firebase.initializeApp(  firebaseConfig);