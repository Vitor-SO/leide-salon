import { useContext, useState } from 'react';
import { UserLoginContext } from '../../Contexts/auth';
import FirebaseController from "../../Services/Firebase/firebase.controller"
import { IUserServicesContext } from './model';

const useHomeViewModel = ()=>{
  const firebase = FirebaseController();
  const {user} = useContext(UserLoginContext)
  
  async function GetAllServices(){
    try {
      
    const path = 'specificService'
    const path2 = 'clientOrder'

    const clientOrder = await firebase.read(path2).then((data) => data) as IUserServicesContext[]
    
    const specificService = await firebase.read(path).then((data) =>  data ) as IUserServicesContext[]
    
    const mergedData = [
      ...clientOrder.map(order => ({ ...order, source: 'clientOrder' })),
      ...specificService.map(service => ({ ...service, source: 'specificService' }))
    ];

    return mergedData.filter(data => data.userID === user.id)
    } catch (error) {
      console.log(error);
      
    }
  }


  return {
    GetAllServices
  }
}

export default useHomeViewModel