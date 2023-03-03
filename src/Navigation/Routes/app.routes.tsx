import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../Screens/Home/View";

import Initial from "../../Screens/Initial/View";
import Register from "../../Screens/Register/View";
import ServiceOrders from "../../Screens/ServiceOrders/View";
import { Services } from "../../Screens/Services/View";
import { ConfirmClientOrder } from "../../Screens/SubScreens/ConfirmClientOrder/view";
import { ConfirmSpecificService } from "../../Screens/SubScreens/ConfirmSpecificService/view";
import { ScreenConfirmation } from "../../Screens/SubScreens/ScreenConfirmation/view";
import UserServices from "../../Screens/UserServices/view";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="services" component={Services} />

      <Screen name="serviceOrders" component={ServiceOrders} />

      <Screen
        name="ConfirmSpecificService"
        component={ConfirmSpecificService}
      />
      <Screen name="ConfirmClientOrder" component={ConfirmClientOrder} />

      <Screen name="ScreenConfirmation" component={ScreenConfirmation} />

      <Screen name="userServices" component={UserServices} />
    </Navigator>
  );
}
