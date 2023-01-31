import React from "react";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { ConfirmSpecificServiceType } from "../../../@types/navigation";
import { Button } from "native-base";
import useServiceOrdersViewController from "../../ServiceOrders/viewController";
import useConfirmSpecificServiceViewConstroller from "./view.controller";
import { Success } from "../../../Components/Alerts/success";

export function ConfirmSpecificService({ navigation }: any) {
  const { teste } = useConfirmSpecificServiceViewConstroller();
  const route = useRoute();
  const specificService = route.params as ConfirmSpecificServiceType;
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
        <View style={styles.descService}>
          <Text style={styles.descSubtitle}>{specificService?.service}</Text>
        </View>

        <Text style={styles.title}>Data</Text>
        <Text style={styles.subtitle}>{specificService?.date}</Text>

        <Text style={styles.title}>Hora</Text>
        <Text style={styles.subtitle}>{specificService?.time}</Text>

        <Text style={styles.title}>Quantidade de pessoas</Text>
        <Text style={styles.subtitle}>{specificService?.people}</Text>

        <Text style={styles.title}>Método de pagamento</Text>
        <Text style={styles.subtitle}>{specificService?.payment}</Text>

        <Button
          bg={"#34D399"}
          h={60}
          mt={30}
          onPress={() => {
            const isSpecific = true;
            Save(isSpecific);
          }}
        >
          Confirmar
        </Button>
      </View>
    </SafeAreaView>
  );
}
