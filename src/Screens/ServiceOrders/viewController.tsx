import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Platform } from "react-native";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import useServicesOrdersViewModel from "./View.model";
import DateFormatter from "../../helpers/date-formater";
import TimeFormatter from "../../helpers/time-formatter";

function useViewController() {
  const { CreateSpecificService, CreateClientOrder } =
    useServicesOrdersViewModel();
  const navigation = useNavigation();
  const [textArea, setTextArea] = useState("");
  const [people, setPeople] = useState<number>(1);
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));
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

  const back = () => {
    navigation.goBack();
  };

  const People = (qtd: number) => {
    setPeople(qtd);
  };

  function SpecificService() {
    const service = {
      service: textArea,
      user: "vitoria",
      id: "userid1",
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people: people,
    };

    for (var [key, value] of Object.entries(service)) {
      if (value === undefined || value === null || value === "") {
        return Alert.alert(
          "Algo deu errado!",
          " Por favor verifique se seus dados estão inseridos corretamente."
        );
      }

      try {
        CreateSpecificService(service);

        return Alert.alert(
          "Serviço Agendado!",
          " O serviço foi agendado com sucesso, não vejo a hora de te ver no salão."
        );
      } catch (error) {
        console.log(error);

        return Alert.alert(
          "Algo deu errado!",
          " Por algum motivo não conseguimos concluir seu agendamento, tente mais tarde."
        );
      }
    }
  }

  function ClientOrder() {
    const data = {
      date: DateFormatter(date),
      time: TimeFormatter(time),
      people,
    };
    CreateClientOrder(data);
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
    back,
  };
}

export default useViewController;
