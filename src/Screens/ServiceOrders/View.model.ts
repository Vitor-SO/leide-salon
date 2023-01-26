import { IServiceOrdersProps } from './model';
import { ServicesViewContext } from './../../Contexts/ServicesView';
import { useContext,useState} from "react";
import FirebaseController from '../../Services/Firebase/firebase.controller';

interface ISpecificService{
  id?: string;
  user: string
  service: string,
  date: string,
  time: string,
  people: number,
}

interface IClientOrder{
  id?: string;
  user: string
  userID: string;
  serviceId: string,
  service: string,
  serviceType: string,
  duration: string,
  price: number,
  date: string,
  time: string,
  people: number,
}

interface IClientChoose{
  date: string;
  time: string;
  people: number;
}

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
    const data ={
      id: specificService.id,
      user: specificService.user,
      service: specificService.service,
      date: specificService.date,
      time: specificService.time,
      people: specificService.people,
    }
    
     firebase.create(path,data)
    }

  function SpecificServiceByUsername(user: string){
    const path = 'specificService'
    
     firebase.read(path)
  }

  function CreateClientOrder({date,time,people}: IClientChoose ){
    const path = 'clientOrder'
    const data: IClientOrder = {
      user: 'vitoria',
      userID: "325f0ae2-e02e-4eb4-9888-dff2cfbf2c0e",
      serviceId: modalService[0]?.id,
      service: modalService[0]?.title,
      serviceType: modalService[0]?.type,
      duration: modalService[0]?.duration,
      price: modalService[0]?.price,
      date: date,
      time: time,
      people: people
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