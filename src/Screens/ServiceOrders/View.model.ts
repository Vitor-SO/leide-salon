import { IServiceOrdersProps } from './model';
import { IServicesViewProps } from './../Services/model';
import { ServicesViewContext } from './../../Contexts/ServicesView';
import { useContext} from "react";

const useServicesOrdersViewModel = () =>{
  const {modalService} = useContext(ServicesViewContext);
  const dataServiceOrders: IServiceOrdersProps ={
    title: modalService[0]?.title,
    img: modalService[0]?.img,
    duration: modalService[0]?.duration,
    price: modalService[0]?.price,
    id: '',
    type: modalService[0]?.type
  }

  return{
    dataServiceOrders
  }
}

export default useServicesOrdersViewModel