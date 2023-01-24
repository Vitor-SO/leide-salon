import React from "react";

import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Button } from "../../Components/Button/indext";
import HeadingServicesCard from "../../Components/HeadingServicesCard";
import HomeUserServicesCard from "../../Components/HomeUserServicesCard";
import { IUserServiceOrderList } from "./model";

import { styles } from "./styles";
import useHomeViewModel from "./View.model";

export function Home() {
  const { ButtonNavigation, HeadingServicesHomeList, UserServiceOrderList } =
    useHomeViewModel();

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
      <View style={{ width: "100%", height: 170 }}>
        {/* {
          UserServiceOrderList?.filter((value: IUserServiceOrderList,idx: any)=> idx < 4)
         } */}

        {/* <FlatList
            data={UserServiceOrderList}
            keyExtractor={(item) => item?.id}
            renderItem={({item})=>(
              <HomeUserServicesCard
              data={item}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingLeft:32, paddingRight: 64} }
            initialNumToRender={4}
            maxToRenderPerBatch={2}
            ListEmptyComponent={
              <View style={styles.viewEmptyOrders}>
                <Text style={styles.emptyOrders}>Você não agendou nenhum serviço ainda.</Text>
              </View>
            }
          /> */}
      </View>

      <View style={styles.buttonView}>
        <Button title="Agendar Serviço" onPress={ButtonNavigation} />
      </View>
    </ScrollView>
  );
}
