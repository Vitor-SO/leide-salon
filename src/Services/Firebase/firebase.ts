import {getApp, getApps, initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGING_SENDERID,
    appId: process.env.APPID
  };
  

 const app = !getApps ? initializeApp(firebaseConfig) : getApp();
 const db  = getDatabase(app);

 export {app, db}