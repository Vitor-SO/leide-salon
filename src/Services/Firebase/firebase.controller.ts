import { DataSnapshot } from "firebase/database";
import { Alert } from "react-native";
import {ref,set,remove,push,onValue,db,app} from "./firebase";


export default function FirebaseController(){

   function create(path:string, data: any){
    const postListRef = ref(db,path)
    const newPostRef = push(postListRef)
    try {
      set(newPostRef, {
        data
      }).then(() =>{
        return 201
      })
    } catch (error) {
      Alert.alert(
        "Erro ao salvar dados!",
          " os nossos servidores nao conseguiram salvar os dados por favor tente mais tarde!."
      )
    }
  }

    function read(path:string){
      var data:(object | null)[] = []
    const dbRef = ref(db, path);
      onValue(dbRef, (snapshot: DataSnapshot) => {
      snapshot.forEach(childSnapshot =>{
        const childKey = childSnapshot.key;
        const childData= childSnapshot.toJSON();

        data.push(childData);
        
      })
      
    })

    return data;
    
  } 

  function DeleteData(){
    remove(ref(db));
  }


  return {
    create,
    read,
    DeleteData
  }
}