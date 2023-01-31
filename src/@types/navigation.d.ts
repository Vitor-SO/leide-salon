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
      ScreenConfirmation: undefined;
    }
  }
}