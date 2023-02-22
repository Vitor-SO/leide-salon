import { IUserServicesContext } from "../Home/model";

export interface UserServicesType extends IUserServicesContext {
  id?: string,
  serviceId: string,
  service: string,
  serviceType: string,
  isSpecific?: boolean;
  img: string,
  desc?: string,
  duration: string
  price: number,
}