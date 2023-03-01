import { UserLoginContext } from './../../Contexts/auth';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


function useInitialScreenController(){
  const {HandleGoogleSignIn, isAuthenticated,Login} = useContext(UserLoginContext)
  const navigation = useNavigation()

  async function Connect(){
    const response = await HandleGoogleSignIn()

    if(response === "success"){
      navigation.navigate("home")
    }
  }

  function AutoLogin(){
    Login()
  }

  return {
    Connect,isAuthenticated,AutoLogin
  }
}

export default useInitialScreenController;