import { useNavigation } from '@react-navigation/native';
import { ServicesViewContext } from './../../Contexts/ServicesView';
import { useContext } from "react";
import { servicesList, serviceDetails } from './model';

const useServicesViewModel = () =>{
  const {titleSection,setTitleSection,newDetailsCard,modalService,
    modalVisible,setModalVisible,handleServiceDetailsCard,handleServiceList} = useContext(ServicesViewContext);
  const navigation = useNavigation()

  function Navigation(){
    navigation.navigate("serviceOrders")
  }
  return{
    titleSection,
    setTitleSection,
    servicesList,
    serviceDetails,
    newDetailsCard,
    modalService,
    modalVisible,
    setModalVisible,
    handleServiceDetailsCard,
    handleServiceList,
    Navigation
  }
}

export default useServicesViewModel