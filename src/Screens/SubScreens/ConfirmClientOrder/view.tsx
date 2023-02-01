import React, { useContext } from "react";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { ConfirmClientOrderType } from "../../../@types/navigation";
import { Button } from "native-base";
import useServiceOrdersViewController from "../../ServiceOrders/viewController";
import { Success } from "../../../Components/Alerts/success";
import { ServicesViewContext } from "../../../Contexts/ServicesView";

export function ConfirmClientOrder({ navigation }: any) {
  const { modalService } = useContext(ServicesViewContext);
  const route = useRoute();
  const clientOrder = route.params as ConfirmClientOrderType;
  const { Save } = useServiceOrdersViewController();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <View style={styles.arrow}>
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.textScreen}>Confirmar Serviço</Text>
      </View>

      <View style={styles.viewServices}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          Descrição do serviço (resumo)
        </Text>
        <Text>{modalService[0]?.title}</Text>
        <Text>{modalService[0]?.duration}</Text>
        <Text>{modalService[0]?.price}</Text>

        <Text style={styles.title}>Data</Text>
        <Text style={styles.subtitle}>{clientOrder?.date}</Text>

        <Text style={styles.title}>Hora</Text>
        <Text style={styles.subtitle}>{clientOrder?.time}</Text>

        <Text style={styles.title}>Quantidade de pessoas</Text>
        <Text style={styles.subtitle}>{clientOrder?.people}</Text>

        <Text style={styles.title}>Método de pagamento</Text>
        <Text style={styles.subtitle}>{clientOrder?.payment}</Text>

        <Button
          bg={"#34D399"}
          h={60}
          mt={30}
          onPress={() => {
            const isSpecific = false;
            Save(isSpecific);
          }}
        >
          Confirmar
        </Button>
      </View>
    </SafeAreaView>
  );
}
