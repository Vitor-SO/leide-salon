import React, { useEffect } from "react";

import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";

import { styles } from "./styles";
import useUserService from "./View.model";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { THEME } from "../../../Theme";
import { useRoute } from "@react-navigation/native";
import { UserServicesType } from "./model";
import { Button } from "../../../Components/Button/indext";
import { Entypo } from "@expo/vector-icons";
import useUserServiceController from "./view.controller";
import { Ionicons, AntDesign } from "@expo/vector-icons";
function UserServices({ navigation }: any) {
  const route = useRoute();
  const serviceData = route.params as UserServicesType;
  const { deleteService } = useUserServiceController();

  function fixTime() {
    const first = serviceData.time.split(":")[0];
    const second = serviceData.time.split(":")[1];

    return `${first}:${second}`;
  }

  return (
    <SafeAreaView style={styles.container}>
      {serviceData?.isSpecific ? (
        <>
          <View style={styles.backContainer}>
            <View style={styles.arrow}>
              <Entypo
                name="chevron-thin-left"
                size={24}
                color="black"
                onPress={() => navigation.goBack()}
              />
            </View>

            <Text style={styles.textSection}>Serviço Agendado</Text>
          </View>
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.titleService}>Serviço específico</Text>
            <View style={styles.viewDuration}>
              <MaterialIcons
                name="timer"
                size={30}
                color={THEME.COLORS.OVERLAY}
              />

              <Text style={styles.duration}>
                {serviceData?.duration} tempo de serviço com base no tipo de
                serviço e estado do cabelo.
              </Text>
            </View>
            <Text style={styles.price}>💵 a combinar</Text>

            <Text style={{ alignContent: "center", justifyContent: "center" }}>
              <AntDesign name="calendar" size={24} color="black" />{" "}
              {serviceData.date}{" "}
            </Text>

            <Text
              style={{
                alignContent: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <AntDesign name="clockcircleo" size={24} color="black" />{" "}
              {fixTime()} h
            </Text>

            <View style={styles.line}></View>
            <Text style={styles.descTitle}>Descrição do Serviço: </Text>
            <Text style={styles.descText}>{serviceData?.service}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.backContainer}>
            <View style={styles.arrow}>
              <Entypo
                name="chevron-thin-left"
                size={24}
                color="black"
                onPress={() => navigation.goBack()}
              />
            </View>
            <Text style={styles.textSection}>Serviço Agendado</Text>
          </View>
          <View style={styles.imgContainer}>
            <ImageBackground
              style={styles.modalizeImage}
              source={{ uri: `${serviceData?.img}` }}
              resizeMode={"cover"}
            />
          </View>
          <View style={styles.descService}>
            <Text style={styles.titleService}>{serviceData?.service}</Text>

            <View style={styles.viewDuration}>
              <MaterialIcons
                name="timer"
                size={30}
                color={THEME.COLORS.OVERLAY}
              />

              <Text style={styles.duration}>
                {serviceData?.duration} Horas/Minutos
              </Text>
            </View>

            <Text style={styles.price}>$ {serviceData?.price} reais</Text>

            <Text style={{ alignContent: "center", justifyContent: "center" }}>
              <AntDesign name="calendar" size={24} color="black" />{" "}
              {serviceData.date}{" "}
            </Text>

            <Text
              style={{
                alignContent: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <AntDesign name="clockcircleo" size={24} color="black" />{" "}
              {fixTime()} hora(s)
            </Text>

            <View style={styles.line}></View>
            <Text style={styles.descTitle}>Descrição do Serviço: </Text>
            <Text style={styles.descText}>{serviceData?.desc}</Text>
          </View>
        </>
      )}

      <View style={styles.viewButton}>
        <Button
          title="Excluir"
          onPress={() => {
            deleteService(
              serviceData?.id ? serviceData.id : serviceData?.serviceId,
              serviceData?.isSpecific ? serviceData?.isSpecific : false
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default UserServices;
