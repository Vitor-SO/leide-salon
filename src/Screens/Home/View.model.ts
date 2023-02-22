import { useState } from 'react';
import FirebaseController from "../../Services/Firebase/firebase.controller"
import { IUserServicesContext } from './model';

const useHomeViewModel = ()=>{
  const firebase = FirebaseController();
  
  async function GetAllServices(){
    
    const path = 'specificService'
    const path2 = 'clientOrder'

    const clientOrder = await firebase.read(path2).then((data) => {
      return data
    }) as IUserServicesContext[]
    

    const specificService = await firebase.read(path).then((data) => {
      return data
    }) as IUserServicesContext[]
    
    

    const mergedData = [
      ...clientOrder.map(order => ({ ...order, source: 'clientOrder' })),
      ...specificService.map(service => ({ ...service, source: 'specificService' }))
    ];

    return mergedData
  }


  return {
    GetAllServices
  }
}

export default useHomeViewModel