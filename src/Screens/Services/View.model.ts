import FirebaseController from '../../Services/Firebase/firebase.controller';


const useServicesViewModel = () =>{
  const firebase = FirebaseController()

  function GetServices(){
    const path = 'salon/DetailedServices'
    
    return firebase.read(path)

  }
  function GetServicesByRef(idRef: string){
    const path = `salon/DetailedServices/${idRef}`
    
    const data = firebase.read(path)
    return data
  }


  return{
    GetServices,
    GetServicesByRef
  }
}

export default useServicesViewModel