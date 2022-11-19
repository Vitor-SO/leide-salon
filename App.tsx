import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Initial from './src/Screens/Initial/View';
import { useFonts, Inter_400Regular,Inter_600SemiBold,Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import Loading from './src/Components/Loading';
import Register from './src/Screens/Register/View';
import Login from './src/Screens/Login/View';
import Routes from './src/Navigation/Routes';
import { Home } from './src/Screens/Home/View';
import { Services } from './src/Screens/Services/View';
import ServicesViewProvider from './src/Contexts/ServicesView';

export default function App() {

  const [fontsLoaded]=useFonts({
    Inter_400Regular,Inter_600SemiBold,Inter_700Bold, Inter_900Black,
    Island_400Regular: require('./src/Assets/Fonts/IslandMoments-Regular.ttf')
  })

  return (
    < >
      <StatusBar style="auto" />
      <ServicesViewProvider>
      {fontsLoaded ? <Routes/> : <Loading/>}
      </ServicesViewProvider>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
