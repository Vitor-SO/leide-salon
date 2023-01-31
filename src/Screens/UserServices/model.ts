import { IUserServicesContext } from "../Home/model";

export interface UserServicesType extends IUserServicesContext {
  id?: string,
  serviceType: string,
  service: string,
  imgURL?: string,
  desc?: string,
  duration: string
  price: number,
}