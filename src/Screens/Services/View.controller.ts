import { useNavigation } from '@react-navigation/native';
import { ServicesViewContext } from '../../Contexts/ServicesView';
import { useContext, useState } from "react";
import { servicesList, detailedServices, IServicesViewProps } from './model';

const useServicesViewController = () =>{
  const {titleSection,setTitleSection,newDetailedServices,modalService,
    modalVisible,setModalVisible,handleDetailedServicesCard,handleServiceList, DataServices, detailedServices,setNewDetailedServices} = useContext(ServicesViewContext);
  const navigation = useNavigation()

  const [searchText,setSearchText] = useState<string>('')

  function Navigation(){
    navigation.navigate("serviceOrders",{isSpecific: false})
  }

  const back = () => {
    navigation.goBack();
  };


  function GetData(){
    
    DataServices();
  }

  

  
  return{
    titleSection,
    setTitleSection,
    servicesList,
    detailedServices,
    newDetailedServices,
    modalService,
    modalVisible,
    setModalVisible,
    handleDetailedServicesCard,
    handleServiceList,
    Navigation,
    back,
    searchText,
    setSearchText,
    setNewDetailedServices,
    GetData
  }
}

export default useServicesViewController