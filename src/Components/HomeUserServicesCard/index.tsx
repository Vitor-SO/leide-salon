import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import useUserService from "../../Screens/UserServices/View.model";
import { IUserServicesContext } from "../../Screens/Home/model";

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
  accepted?: boolean;
  modified?: boolean;
  modification?: string;
}

interface IProps extends TouchableOpacityProps {
  data: IHomeUserServicesCard;
}

export default function HomeUserServicesCard({ data, ...rest }: IProps) {
  const { toPage } = useUserService();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftView}
        {...rest}
        onPress={() => toPage(data)}
      >
        <Image source={{ uri: data.imgURL }} style={styles.img} />

        <View style={styles.describeView}>
          <Text style={styles.title}>{data.service}</Text>

          <View style={styles.desc}>
            <Text style={styles.items}>${data.price}</Text>
            <Text style={styles.items}>{`\u2022`}</Text>
            <Text style={styles.items}>{data.serviceType}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.removeItemIcon}>
        <AntDesign name="minuscircleo" size={40} color="red" />
      </TouchableOpacity>
    </View>
  );
}
