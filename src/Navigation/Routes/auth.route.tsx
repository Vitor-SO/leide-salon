import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../Screens/Home/View";
import Initial from "../../Screens/Initial/View";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Initial" component={Initial} />
      <Screen name="home" component={Home} />
    </Navigator>
  );
}
