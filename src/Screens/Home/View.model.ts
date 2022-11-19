import {useNavigation} from "@react-navigation/native"
import { HeadingServicesHomeList,UserServiceOrderList } from './model';
const useHomeViewModel = () =>{
  const navigation = useNavigation()

  function Navigation(){
    navigation.navigate("services")
  }
  return{
    Navigation,HeadingServicesHomeList,UserServiceOrderList
  }
}

export default useHomeViewModel