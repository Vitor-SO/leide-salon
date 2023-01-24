import { UserServicesType } from "../Screens/UserServices/model";

export interface SpecificService{
  isSpecific: boolean;
}

export interface ServicesParams{
  title: string;
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
    }
  }
}