import  {initializeApp} from "firebase/app";
import { getDatabase,ref,set,remove,push,onValue,get,child } from "firebase/database";
import {APIKEY,AUTHDOMAIN,DATABASEURL,PROJECTID,STORAGE_BUCKET,MESSAGING_SENDERID,APPID} from "@env"
// Initialize Firebase
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDERID,
  appId: APPID
};


const app = initializeApp(firebaseConfig)
 
const db  = getDatabase(app);

export {ref,set,remove,push,onValue,db,app,get,child}
