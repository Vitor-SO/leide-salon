import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { UserServicesType } from './model';


const useUserService = () => {
  // const [serviceData, setServiceData] = useState<UserServicesType>()
  const navigation = useNavigation()

  function toPage(data: UserServicesType){
     navigation.navigate('userServices', data)
  }
  
  return{
    toPage
  }
}


export default useUserService