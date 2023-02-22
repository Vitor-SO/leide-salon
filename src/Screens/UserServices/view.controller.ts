import { useNavigation } from '@react-navigation/native';
import { useToast } from 'native-base';
import { useState } from 'react';
import { Success } from '../../Components/Alerts/success';
import { UserServicesType } from './model';
import useUserServiceModel from './View.model';


const useUserServiceController = () => {
  const {delService} = useUserServiceModel()
  const toast = useToast()
  const navigation = useNavigation()
  function deleteService(serviceId: string | undefined, isSpecific:boolean | undefined) {
    
    if(serviceId) {
      delService(serviceId,isSpecific)
       toast.show({
        backgroundColor: "green.400",
        description: "Serviço excluido com sucesso!",
      });
      navigation.navigate("home")
    }

  }

  return{
    deleteService
  }
}


export default useUserServiceController