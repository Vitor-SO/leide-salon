import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Platform } from "react-native";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import useServicesOrdersViewModel from "./View.model";
import DateFormatter from "../../helpers/date-formater";
import TimeFormatter from "../../helpers/time-formatter";
import { Success } from "../../Components/Alerts/success";
import { useToast } from "native-base";

function useServiceOrdersViewController() {
  const { CreateSpecificService, CreateClientOrder } =
    useServicesOrdersViewModel();
  const toast = useToast();
  const navigation = useNavigation();
  const [textArea, setTextArea] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));
  const [people, setPeople] = useState<number>(1);
  const [payment, setPayment] = useState<string>("");
  const [mode, setMode] = useState<string>();
  const [show, setShow] = useState(false);

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
      user: "Ana",
      userID: "325f0ae2-e02e-4eb4-9888-dff2cfbf2c0e",
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
      user: "Ana",
      userID: "325f0ae2-e02e-4eb4-9888-dff2cfbf2c0e",
      id: "ac5704d0-a197-45f3-bed8-569a11926a4a",
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people: people,
      payment,
    });
  }

  function GoToConfirmServiceScreen() {}

  function SpecificService() {
    const service = {
      service: textArea,
      user: "Ana",
      userID: "325f0ae2-e02e-4eb4-9888-dff2cfbf2c0e",
      id: "ac5704d0-a197-45f3-bed8-569a11926a6b",
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people: people,
      payment,
    };

    try {
      CreateSpecificService(service);
      navigation.navigate("ScreenConfirmation");
    } catch (error) {
      console.log(error);

      return toast.show({ description: "An error occurred" });
    }
  }

  function ClientOrder() {
    const data = {
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people,
    };

    try {
      CreateClientOrder(data);
      return Alert.alert("serviço agendado com sucesso!");
    } catch (error) {
      return Alert.alert(
        "Algo deu errado!",
        " Por algum motivo não conseguimos concluir seu agendamento, tente mais tarde."
      );
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
