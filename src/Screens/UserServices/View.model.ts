import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import FirebaseController from '../../Services/Firebase/firebase.controller';
import { UserServicesType } from './model';


const useUserServiceModel = () => {
  const firebaseController =  FirebaseController();
  const navigation = useNavigation()

  function toPage(data: UserServicesType){
     navigation.navigate('userServices', data)
  }

  function delService(id: string, isSpecfic:boolean | undefined) {
    try {
      if(isSpecfic){
        const path = 'specificService'
        firebaseController.DeleteData(id,path)
      }else{
        const path = 'clientOrder'
        firebaseController.DeleteData(id,path)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  
  return{
    toPage,
    delService
  }
}


export default useUserServiceModel