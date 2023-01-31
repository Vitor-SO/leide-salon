import { Success } from "../../../Components/Alerts/success";

function useConfirmSpecificServiceViewConstroller(){
  const teste =() =>{
    return (Success("teste"))
  }

  return{
    teste
  }
}

export default useConfirmSpecificServiceViewConstroller;