import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Initial from '../../Screens/Initial/View'
import Register from '../../Screens/Register/View'

const {Navigator, Screen} = createNativeStackNavigator()

export default function AppRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false}}>
    <Screen
      name="initial" component={Initial} 
    />
    <Screen
      name="register" component={Register}
    />
  </Navigator>
  )
}