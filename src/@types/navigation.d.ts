export interface SpecificService{
  isSpecific?: Boolean;
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
    }
  }
}