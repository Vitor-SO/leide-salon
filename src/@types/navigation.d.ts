import { ISpecificService } from './../Screens/ServiceOrders/model';
import { UserServicesType } from "../Screens/UserServices/model";

export interface SpecificService{
  isSpecific: boolean;
}

export interface ServicesParams{
  title: string;
}

export interface ConfirmSpecificServiceType{
  service: string;
      user: string;
      userID: string;
      id: string;
      date: string;
      time: string;
      people: number;
      payment: string;
      isSpecific: boolean;
      status?: string;
  modified: boolean;
  modification: string;
}

export interface ConfirmClientOrderType{
      date: string;
      time: string;
      people: number;
      payment: string;
}

export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      inital: undefined;
      register: undefined;
      login: undefined;
      home: undefined;
      services: ServicesParams;
      serviceOrders: SpecificService;
      userServices: UserServicesType;
      ConfirmSpecificService: ConfirmSpecificServiceType;
      ConfirmClientOrder: ConfirmClientOrderType;
      ScreenConfirmation: undefined;
    }
  }
}