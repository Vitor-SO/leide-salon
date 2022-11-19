import { IServicesViewProps } from "../Services/model";

export interface IServiceOrdersProps extends IServicesViewProps{
  title: string;
  img: string;
  duration: string;
  price: number;
}