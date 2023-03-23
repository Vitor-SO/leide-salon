import { useContext, useState } from 'react';
import { HeadingServicesHomeList, IUserServicesContext } from "./model";
import { useNavigation } from "@react-navigation/native";
import useHomeViewModel from "./View.model";
import { UserLoginContext } from '../../Contexts/auth';


function useHomeViewController() {
  const { user } = useContext(UserLoginContext);
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

  const GetServices = async () => {
    const services = await GetAllServices()
    setUserServicesList(services as IUserServicesContext[])
    
  }

  function ButtonNavigation() {
    navigation.navigate("services", { title: "Corte de Cabelo" });
  }

  return {
    CardNavigation,
    ButtonNavigation,
    HeadingServicesHomeList,
    GetServices,
    userServiceslist,
    user
  };
}

export default useHomeViewController;
