import { Center, Skeleton, VStack } from "native-base";
import React, { useEffect, useLayoutEffect } from "react";

import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Button } from "../../Components/Button/indext";
import HeadingServicesCard from "../../Components/HeadingServicesCard";
import HomeUserServicesCard from "../../Components/HomeUserServicesCard";

import { styles } from "./styles";
import useHomeViewController from "./view.controller";

export const Home = () => {
  const {
    ButtonNavigation,
    HeadingServicesHomeList,
    GetServices,
    userServiceslist,
  } = useHomeViewController();

  useLayoutEffect(() => {
    GetServices();
  }, []);

  return (
    <ScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <View style={styles.viewUser}>
        <Image
          source={require("../../Assets/Images/womanIcon.png")}
          style={styles.icon}
        />

        <Text style={styles.name}>Usúario</Text>
      </View>

      <Text style={styles.textSection}>Nossos Serviços</Text>
      <FlatList
        data={HeadingServicesHomeList}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <HeadingServicesCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 32, paddingRight: 64 }}
      />

      <Text style={styles.textSection}>Serviços Agendados</Text>
      <View style={{ height: 300 }}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            width: "100%",
            // height: 300,
            marginBottom: 20,
          }}
        >
          {userServiceslist ? (
            userServiceslist.map((item, idx) => (
              <View key={idx}>
                <HomeUserServicesCard data={item} />
              </View>
            ))
          ) : (
            <Center w="350">
              <VStack
                w="90%"
                maxW="400"
                borderWidth="1"
                space={8}
                overflow="hidden"
                rounded="md"
                _dark={{
                  borderColor: "coolGray.500",
                }}
                _light={{
                  borderColor: "coolGray.200",
                }}
              >
                <Skeleton h="40" />
                <Skeleton.Text px="4" />
                <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
              </VStack>
            </Center>
          )}
        </ScrollView>
      </View>

      <View style={styles.buttonView}>
        <Button title="Agendar Serviço" onPress={ButtonNavigation} />
      </View>
    </ScrollView>
  );
};
