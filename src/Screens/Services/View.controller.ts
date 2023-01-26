import { useNavigation } from '@react-navigation/native';
import { ServicesViewContext } from '../../Contexts/ServicesView';
import { useContext, useState } from "react";
import { servicesList, detailedServices, IServicesViewProps } from './model';

const useServicesViewController = () =>{
  const {titleSection,setTitleSection,newDetailedServices,modalService,
    modalVisible,setModalVisible,handleDetailedServicesCard,handleServiceList, DataServices} = useContext(ServicesViewContext);
  const navigation = useNavigation()

  const [data,setData] = useState<IServicesViewProps[]>([])
  const [searchData,setSearchData] = useState<IServicesViewProps[]>([])

  function Navigation(){
    navigation.navigate("serviceOrders",{isSpecific: false})
  }

  const back = () => {
    navigation.goBack();
  };


  function GetData(){
    
    DataServices();
  }

  
  function Search(text: string):void{
    
    if(text){
    setData(detailedServices)
    setTitleSection(text)
    const newData = data.filter(item => {
      const itemData = item.type ? item.type.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    })

    
    setSearchData(newData)
   }else{
    setSearchData(data)
    setTitleSection("Corte de Cabelo")
   }
    
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
    Search,
    searchData,
    GetData
  }
}

export default useServicesViewController