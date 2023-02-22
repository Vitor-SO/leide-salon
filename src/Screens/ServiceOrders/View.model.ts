import { IServiceOrdersProps, ISpecificService, IClientChoose, IClientOrder } from './model';
import { ServicesViewContext } from './../../Contexts/ServicesView';
import { useContext,useState} from "react";
import FirebaseController from '../../Services/Firebase/firebase.controller';

const useServicesOrdersViewModel = () =>{
  const firebase = FirebaseController()
  
  const {modalService} = useContext(ServicesViewContext);

  const dataServiceOrders: IServiceOrdersProps ={
    title: modalService[0]?.title,
    img: modalService[0]?.img,
    duration: modalService[0]?.duration,
    price: modalService[0]?.price,
    id: modalService[0]?.id,
    type: modalService[0]?.type
  } 

  function CreateSpecificService(specificService: ISpecificService):void{
    const path =`specificService`
    
     firebase.create(path,specificService)
    }

  function SpecificServiceByUsername(user: string){
    const path = 'specificService'
    
     firebase.read(path)
  }

  function CreateClientOrder({date,time,people,payment}: IClientChoose ){
    const path = 'clientOrder'
    const data: IClientOrder = {
      user: 'Xovana',
      userID: "325f0ae2-e02e-4eb4-9888-dff2cfbf2c0e",
      serviceId: modalService[0]?.id,
      img: modalService[0]?.img,
      service: modalService[0]?.title,
      desc: modalService[0]?.desc,
      serviceType: modalService[0]?.type,
      duration: modalService[0]?.duration,
      price: modalService[0]?.price,
      date: date,
      time: time,
      people: people,
      payment: payment,
  status: 'Marcado',
  modified: false,
  modification: '',
    }

    firebase.create(path,data)
    
  }


  return{
    dataServiceOrders,
    CreateSpecificService,
    SpecificServiceByUsername,
    CreateClientOrder
  }
}

export default useServicesOrdersViewModel