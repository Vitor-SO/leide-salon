import React, { createContext, useState } from "react";
import {
  IServicesView,
  IServicesViewProps,
  detailedServices,
  defaultServicesCard,
} from "../Screens/Services/model";
import useServicesViewModel from "../Screens/Services/View.model";

export const ServicesViewContext = createContext({} as IServicesView);

function ServicesViewProvider({ children }: any) {
  const [titleSection, setTitleSection] = useState<string>("Corte de Cabelo");
  const [modalService, setModalService] = useState<IServicesViewProps[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [newDetailedServices, setNewDetailedServices] =
    useState<IServicesViewProps[]>(defaultServicesCard);
  const [detailedServices, setDetailedServices] =
    useState<IServicesViewProps[]>();

  const { GetServices } = useServicesViewModel();

  function DataServices() {
    const firebaseData = GetServices();

    setDetailedServices(firebaseData as IServicesViewProps[]);

    const initialDataForCards = firebaseData?.filter((service) => {
      const data = service as IServicesViewProps;

      return data.type === "Corte de Cabelo";
    });

    setNewDetailedServices(initialDataForCards as IServicesViewProps[]);
  }

  function handleServiceList(title: string) {
    if (title) {
      setTitleSection(title);
      const data = detailedServices?.filter(
        (service) => service.type === title
      );
      setNewDetailedServices(data as IServicesViewProps[]);
    }
    return;
  }

  function handleDetailedServicesCard(title: string) {
    if (title && newDetailedServices.length === 0) {
      const data = detailedServices?.filter(
        (service) => service.title === title
      );
      setModalService(data as IServicesViewProps[]);
    }

    const data = newDetailedServices.filter(
      (service) => service.title === title
    );

    setModalService(data);

    if (!modalVisible) {
      setModalVisible(true);
    }
  }

  return (
    <ServicesViewContext.Provider
      value={{
        titleSection,
        setTitleSection,
        newDetailedServices,
        handleServiceList,
        handleDetailedServicesCard,
        modalService,
        modalVisible,
        setModalVisible,
        DataServices,
      }}
    >
      {children}
    </ServicesViewContext.Provider>
  );
}

export default ServicesViewProvider;
