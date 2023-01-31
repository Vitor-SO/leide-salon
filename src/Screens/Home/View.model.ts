import { useState } from 'react';
import FirebaseController from "../../Services/Firebase/firebase.controller"
import { IUserServicesContext } from './model';

const useHomeViewModel = ()=>{
  const firebase = FirebaseController();
  
  function GetAllServices(){
    const path = 'specificService'
    const path2 = 'clientOrder'

    
    const specificService = firebase.read(path).map((item) => {
      const data = item?.data as IUserServicesContext || undefined // data is undefined if the creatation dont create with data 
      
      return data
    })
    const clientOrder = firebase.read(path2).map((item) => {
      const data = item?.data as IUserServicesContext || undefined // data is undefined if the creatation dont create with data 
      
      return data
    }) 

    
    const data = specificService.concat(clientOrder)
  
    return data
    
  }


  return {
    GetAllServices
  }
}

export default useHomeViewModel