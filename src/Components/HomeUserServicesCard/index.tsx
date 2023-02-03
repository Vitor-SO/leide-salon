import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { styles } from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import useUserService from "../../Screens/UserServices/View.model";
import { IUserServicesContext } from "../../Screens/Home/model";
import { useState } from "react";
import { THEME } from "../../Theme";

interface IHomeUserServicesCard extends IUserServicesContext {
  id?: string;
  serviceType: string;
  service: string;
  imgURL?: string;
  desc?: string;
  duration: string;
  price: number;
  date: string;
  time: string;
  status?: string;
  modified?: boolean;
  modification?: string;
}

interface IProps extends TouchableOpacityProps {
  data: IHomeUserServicesCard;
}

export default function HomeUserServicesCard({ data, ...rest }: IProps) {
  const { toPage } = useUserService();
  const [statusText, setStatusText] = useState("");
  const [color, setColor] = useState("");

  function fixTime() {
    const first = data.time.split(":")[0];
    const second = data.time.split(":")[1];

    return `${first}:${second}`;
  }

  const statusTags = ["Marcado", "Não marcado", "Em espera", "Remarcado"];

  function Status() {
    statusTags.filter((status) => {
      if (status === data.status) {
        switch (data.status) {
          case "Marcado":
            setColor(THEME.COLORS.SUCCESS2);
            setStatusText(data.status);
            break;
          case "Não marcado":
            setColor(THEME.COLORS.ALERT);
            setStatusText(data.status);
            break;
          case "Em espera":
            setColor("black");
            setStatusText(data.status);
            break;
          case "Em espera":
            setColor("yellow");
            setStatusText(data.status);
            break;
          default:
            setColor("red");
            setStatusText(data.status);
            break;
        }
      }
    });

    return <Text style={[styles.items, { color }]}>{statusText}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.describeView}>
        <Text numberOfLines={1} lineBreakMode={"tail"} style={styles.title}>
          {data.service}
        </Text>
        <Text style={{ alignContent: "center", justifyContent: "center" }}>
          <AntDesign name="calendar" size={24} color="black" /> {data.date}{" "}
          <AntDesign name="clockcircleo" size={24} color="black" /> {fixTime()}
        </Text>
        <View style={styles.desc}>
          <Text style={styles.items}>
            {data.price ? `$ ${data.price} reais` : ""}
          </Text>
        </View>
        <View style={styles.status}>
          <Ionicons name="information-circle-outline" size={24} color="black" />
          {Status()}
        </View>
      </View>
      <TouchableOpacity
        style={styles.details}
        {...rest}
        onPress={() => toPage(data)}
      >
        <Text style={styles.textDetails}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}
