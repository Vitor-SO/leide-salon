import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServicesViewProvider from "../../Contexts/ServicesView";
import { Home } from "../../Screens/Home/View";

import Initial from '../../Screens/Initial/View'
import Register from '../../Screens/Register/View'
import ServiceOrders from "../../Screens/ServiceOrders/View";
import { Services } from "../../Screens/Services/View";

const {Navigator, Screen} = createNativeStackNavigator()

export default function AppRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false}}>
    {/* <Screen
      name="Initial" component={Initial} 
    />
    <Screen
      name="register" component={Register}
    /> */}

    <Screen name="home" component={Home}/>

    <Screen name="services" component={Services}/>

    <Screen name="serviceOrders" component={ServiceOrders}/>
  </Navigator>
  )
}