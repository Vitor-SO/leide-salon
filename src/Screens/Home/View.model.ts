import {useNavigation} from "@react-navigation/native"
import { HeadingServicesHomeList,UserServiceOrderList } from './model';

const useHomeViewModel = () =>{
  const navigation = useNavigation()

  function CardNavigation(title:string){

    if(title === 'Serviço Específico'){
      navigation.navigate("serviceOrders",{isSpecific: true})
    }else{
      navigation.navigate('services',{title})
    }

  }

  function ButtonNavigation(){
    navigation.navigate("services",{title: 'Corte de Cabelo'})
  }
  return{
    CardNavigation,ButtonNavigation,HeadingServicesHomeList,UserServiceOrderList
  }
}

export default useHomeViewModel