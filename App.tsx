import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import Loading from "./src/Components/Loading";
import Routes from "./src/Navigation/Routes";
import ServicesViewProvider from "./src/Contexts/ServicesView";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
    Island_400Regular: require("./src/Assets/Fonts/IslandMoments-Regular.ttf"),
  });

  return (
    <>
      <StatusBar style="auto" />
      <ServicesViewProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </ServicesViewProvider>
    </>
  );
}
