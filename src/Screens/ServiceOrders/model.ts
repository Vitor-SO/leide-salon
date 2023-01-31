import { IServicesViewProps } from "../Services/model";

export interface IServiceOrdersProps extends IServicesViewProps{
  title: string;
  img: string;
  duration: string;
  price: number;
}

export interface ISpecificService{
  id?: string;
  user: string
  userID: string;
  service: string,
  date: string,
  time: string,
  people: number,
}

export interface IClientOrder{
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
  accepted?: boolean;
  modified?: boolean;
  modification?: string;
}

export interface IClientChoose{
  date: string;
  time: string;
  people: number;
}

export const QTPeople= ['1','2','3']