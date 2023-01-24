import { IServiceOrdersProps } from './model';
import { ServicesViewContext } from './../../Contexts/ServicesView';
import { useContext,useState} from "react";
import FirebaseController from '../../Services/Firebase/firebase.controller';
import DateFormatter from '../../helpers/date-formater';

// import { parseISO } from 'date-fns'; 
// import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

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
    id: '',
    type: modalService[0]?.type
  } 

  function CreateSpecificService(specificService: ISpecificService):void{
    const path =`specificService/${specificService.id}`
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
      user: 'user-aleatorio',
      serviceId: modalService[0]?.id,
      service: modalService[0]?.title,
      serviceType: modalService[0]?.type,
      duration: modalService[0]?.duration,
      price: modalService[0]?.price,
      date: date,
      time: time,
      people: people
    }

    console.log(data);
    
  }


  return{
    dataServiceOrders,
    CreateSpecificService,
    SpecificServiceByUsername,
    CreateClientOrder
  }
}

export default useServicesOrdersViewModel