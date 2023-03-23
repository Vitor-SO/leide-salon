import { IUserServicesContext } from './../../Screens/Home/model';
import { DataSnapshot } from "firebase/database";
import { Alert } from "react-native";
import { IServicesViewProps } from "../../Screens/Services/model";
import {ref,set,remove,push,onValue,db,get,child} from "./firebase";


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

  // function read(path:string, callback: (data: (object | null)[]) => void){
  //   var data:(object | null)[] = []
  //   const dbRef = ref(db, path);
  //   onValue(dbRef, (snapshot: DataSnapshot) => {
  //     snapshot.forEach(childSnapshot =>{
  //       const childKey = childSnapshot.key;
  //       const childData= childSnapshot.toJSON();
  //       console.log("fire child data", childData);
  //       data.push(childData);
  //     })
  //     if (!data) {
  //       throw new Error("No childData");
  //     }
  //     console.log("fire controller", data);
  //     callback(data);
  //   });
  // }

  async function read(path:string): Promise<IUserServicesContext[] | IServicesViewProps[]> {
    return await new Promise((resolve, reject) => {
      const dbRef = ref(db, path);
      const allData : IUserServicesContext[] = []
      onValue(dbRef, (snapshot: DataSnapshot) => {
        snapshot.forEach(childSnapshot =>{
          const childData = childSnapshot.toJSON() as {data:IUserServicesContext} | IServicesViewProps[]
          console.log("fire", childData);
          
          if (childData) {
            allData.push((childData?.data ? childData?.data : childData));
          } else {
            reject(new Error("No childData"));
          }
        } )
        resolve(allData);
      });
    });
  }
  

  function DeleteData(id:string,path:string){
    const dbRef = ref(db,path);
    var keyToDelete = ''
    onValue(dbRef, (snapshot: DataSnapshot) => {
          snapshot.forEach(childSnapshot =>{
            const childKey = childSnapshot.key;
            const childData= childSnapshot.toJSON();
            
            if(childData?.data?.id === id || childData?.data?.serviceId === id){
             keyToDelete = childKey as string;
            }else{
              return console.log('data doesnt exist!');
            }
          })
  })

              remove(ref(db,`${path}/${keyToDelete}`));
}


  return {
    create,
    read,
    DeleteData
  }
}