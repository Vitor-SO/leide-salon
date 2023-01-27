import React, { useEffect, useLayoutEffect, useRef } from "react";

import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { ServiceDetailsCard } from "../../Components/ServiceDetailsCard";
import { ServiceList } from "../../Components/ServiceList";

import { styles } from "./styles";
import { Modalize } from "react-native-modalize";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { THEME } from "../../Theme";
import { Button } from "../../Components/Button/indext";
import { useRoute } from "@react-navigation/native";
import { ServicesParams } from "../../@types/navigation";
import { Entypo } from "@expo/vector-icons";
import useServicesViewController from "./View.controller";
import { detailedServices } from "./model";

export function Services() {
  const {
    titleSection,
    setTitleSection,
    servicesList,
    modalVisible,
    setModalVisible,
    modalService,
    Navigation,
    handleServiceList,
    back,
    searchText,
    setSearchText,
    setNewDetailedServices,
    newDetailedServices,
    GetData,
  } = useServicesViewController();
  const modalizeRef = useRef<Modalize>(null);
  const route = useRoute();
  const servicesParams = route.params as ServicesParams;

  useLayoutEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if (modalVisible) {
      modalizeRef.current?.open();
    }
  }, [modalVisible]);

  useEffect(() => {
    if (servicesParams != undefined) {
      handleServiceList(servicesParams?.title);
    }
  }, [servicesParams]);

  useEffect(() => {
    if (searchText === "") {
      handleServiceList("Corte de Cabelo");
    } else {
      handleServiceList(searchText);
    }
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <View style={styles.arrow}>
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="black"
            onPress={() => back()}
          />
        </View>
        <Text style={styles.textSection}>Serviços</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.search}
          placeholder="Buscar   🔍"
          value={searchText}
          onChangeText={(txt) => setSearchText(txt)}
        />
      </View>

      <View>
        <FlatList
          data={servicesList}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => <ServiceList data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          maxToRenderPerBatch={3}
        />
      </View>

      <View style={styles.serviceDetailsContainer}>
        <Text style={styles.titleSection}>{titleSection}</Text>

        <FlatList
          data={newDetailedServices}
          refreshing={true}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => <ServiceDetailsCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20 }}
          initialNumToRender={3}
          ListEmptyComponent={() => <Text>Sem serviços desse tipo ainda.</Text>}
        />
      </View>

      <Modalize ref={modalizeRef}>
        <View style={styles.modalizeView}>
          <ImageBackground
            style={styles.modalizeImage}
            source={{ uri: `${modalService[0]?.img}` }}
            resizeMode={"cover"}
          >
            <TouchableOpacity
              onPress={() => {
                modalizeRef.current?.close();
                setModalVisible(false);
              }}
              style={styles.closeIcon}
            >
              <MaterialIcons name="close" size={40} color={"#FFFFFF"} />
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.descService}>
            <Text style={styles.titleService}>{modalService[0]?.title}</Text>

            <View style={styles.viewDuration}>
              <MaterialIcons
                name="timer"
                size={21}
                color={THEME.COLORS.OVERLAY}
              />

              <Text style={styles.duration}>
                {modalService[0]?.duration} Horas/Minutos
              </Text>
            </View>

            <Text style={styles.price}>$ {modalService[0]?.price} reais</Text>
            <View style={styles.line}></View>
            <Text style={styles.descTitle}>Descrição do Serviço: </Text>
            <Text style={styles.descText}>{modalService[0]?.desc}</Text>
          </View>

          <View style={styles.buttonAddService}>
            <Button title="Marcar Serviço" onPress={Navigation} />
          </View>
        </View>
      </Modalize>
    </SafeAreaView>
  );
}
