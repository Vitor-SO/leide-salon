import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Alert, Platform } from "react-native";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import useServicesOrdersViewModel from "./View.model";
import DateFormatter from "../../helpers/date-formater";
import TimeFormatter from "../../helpers/time-formatter";
import { Success } from "../../Components/Alerts/success";
import { useToast } from "native-base";
import { IClientOrder, ISpecificService } from "./model";
import { UserLoginContext } from "../../Contexts/auth";

function useServiceOrdersViewController() {
  const { CreateSpecificService, CreateClientOrder } =
    useServicesOrdersViewModel();
  const { user } = useContext(UserLoginContext);
  const toast = useToast();
  const navigation = useNavigation();
  const [textArea, setTextArea] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));
  const [people, setPeople] = useState<number>(1);
  const [payment, setPayment] = useState<string>("");
  const [mode, setMode] = useState<string>();
  const [show, setShow] = useState(false);
  const route = useRoute();
  const params = route.params as ISpecificService | IClientOrder;

  const setText = (text: string) => {
    setTextArea(text);
  };
  const onChangeDate = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const onChangeTime = (event: any, selectedTime: any) => {
    setShow(false);
    setTime(selectedTime);
  };

  const showMode = (mode: string) => {
    if (Platform.OS === "android") {
      setShow(true);
    }
    if (Platform.OS === "ios") {
      setShow(true);
    }

    setMode(mode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const People = (qtd: number) => {
    setPeople(qtd);
  };

  function GoToConfirmSpecificScreen() {
    const service = {
      service: textArea,
      user: user.name,
      userID: user.id,
      id: "ac5704d0-a197-45f3-bed8-569a11926a4a",
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people: people,
      payment,
    };

    for (var [key, value] of Object.entries(service)) {
      if (value === undefined || value === null || value === "") {
        return toast.show({
          backgroundColor: "red.400",
          description: "Verifique se preencheu todos os dados!",
        });
      }
    }

    navigation.navigate("ConfirmSpecificService", {
      service: textArea,
      user: user.name,
      userID: user.id,
      id: "ac5704d0-a197-45f3-bed8-569a11926a4a",
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people: people,
      payment,
      isSpecific: true,
      status: "Em espera",
      modified: false,
      modification: "",
    });
  }

  function GoToConfirmServiceScreen() {
    const service = {
      user: user.name,
      userID: user.id,
      id: "ac5704d0-a197-45f3-bed8-569a11926a4a",
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people: people,
      payment,
    };

    for (var [key, value] of Object.entries(service)) {
      if (value === undefined || value === null || value === "") {
        return toast.show({
          backgroundColor: "red.400",
          description: "Verifique se preencheu todos os dados!",
        });
      }
    }

    navigation.navigate("ConfirmClientOrder", service);
  }

  function SpecificService() {
    try {
      CreateSpecificService(params);
      navigation.navigate("ScreenConfirmation");
    } catch (error) {
      return toast.show({
        description:
          "Por algum motivo não conseguimos concluir seu agendamento.",
      });
    }
  }

  function ClientOrder() {
    try {
      CreateClientOrder(params);
      navigation.navigate("ScreenConfirmation");
    } catch (error) {
      return toast.show({
        description:
          "Por algum motivo não conseguimos concluir seu agendamento.",
      });
    }
  }

  const Save = (isEspecific: boolean) => {
    if (isEspecific) {
      SpecificService();
    } else {
      ClientOrder();
    }
  };

  return {
    setText,
    Date,
    People,
    textArea,
    date,
    people,
    Save,
    onChangeDate,
    onChangeTime,
    showDatepicker,
    showTimepicker,
    show,
    time,
    mode,
    setPayment,
    GoToConfirmSpecificScreen,
    GoToConfirmServiceScreen,
  };
}

export default useServiceOrdersViewController;
