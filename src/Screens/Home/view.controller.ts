import { useState } from 'react';
import { HeadingServicesHomeList, IUserServicesContext } from "./model";
import { useNavigation } from "@react-navigation/native";
import useHomeViewModel from "./View.model";


function useHomeViewController() {
  const {GetAllServices} = useHomeViewModel()
  const navigation = useNavigation();

  const [userServiceslist, setUserServicesList] = useState<IUserServicesContext[]>([])


  function CardNavigation(title: string) {
    if (title === "Serviço Específico") {
      navigation.navigate("serviceOrders", { isSpecific: true });
    } else {
      navigation.navigate("services", { title });
    }
  }

  const GetServices = () => {
    const data = GetAllServices() as IUserServicesContext[]
    setUserServicesList(data)
    
  };

  function ButtonNavigation() {
    navigation.navigate("services", { title: "Corte de Cabelo" });
  }

  return {
    CardNavigation,
    ButtonNavigation,
    HeadingServicesHomeList,
    GetServices,
    userServiceslist,
  };
}

export default useHomeViewController;
