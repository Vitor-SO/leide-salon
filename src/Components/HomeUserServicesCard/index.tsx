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
import { tags } from "react-native-svg/lib/typescript/xml";

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
  isSpecific?: boolean;
  status?: string;
  modified?: boolean;
  modification?: string;
}

interface IProps extends TouchableOpacityProps {
  data: IHomeUserServicesCard;
}

export default function HomeUserServicesCard({ data, ...rest }: IProps) {
  const { toPage } = useUserService();
  var status = { tag: "", style: THEME.COLORS.ALERT };

  function fixTime() {
    const first = data.time.split(":")[0];
    const second = data.time.split(":")[1];

    return `${first}:${second}`;
  }

  const statusTags = [
    { tag: "Marcado", style: THEME.COLORS.SUCCESS2 },
    { tag: "Não marcado", style: THEME.COLORS.ALERT },
    { tag: "Em espera", style: "yellow" },
    { tag: "Remarcado", style: "yellow" },
  ];

  function Status() {
    statusTags.filter((statusfilter) => {
      if (statusfilter.tag === data.status) {
        return (status = { tag: data.status, style: statusfilter.style });
      } else {
        return status;
      }
    });
    return (
      <Text style={[styles.items, { color: status.style }]}>{status.tag}</Text>
    );
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
