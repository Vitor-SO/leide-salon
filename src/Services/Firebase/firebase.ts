import {initializeApp} from "firebase/app";
import { getDatabase,ref,set,remove,push,onValue } from "firebase/database";
// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDERID,
  appId: process.env.APPID
};
  

const app = initializeApp(firebaseConfig)
 
const db  = getDatabase(app);

export {ref,set,remove,push,onValue,db,app}
