import {useNavigation} from "@react-navigation/native"

export default function useRegisterViewModel(){

  const navigation = useNavigation()

  //passar atributos para a pagina home depois com outra funcao
  //que verifica o context

  function handleRegister(){
    navigation.navigate("Register",{})
  }

  return{
    handleRegister
  }
}