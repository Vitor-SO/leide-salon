import React from "react";

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import useServicesViewModel from "../../Screens/Services/View.controller";

import { styles } from "./styles";

interface IServiceDetailsProps {
  id: string;
  title: string;
  img: string;
  duration: string;
  price: number;
}

interface IProps {
  data: IServiceDetailsProps;
}

export function ServiceDetailsCard({ data }: IProps) {
  const { handleDetailedServicesCard } = useServicesViewModel();

  return (
    <>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => handleDetailedServicesCard(data.title)}
          style={styles.container}
        >
          <View style={styles.viewDesc}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.duration}>{data.duration} min</Text>
            <Text style={styles.price}>$ {data.price}</Text>
          </View>

          <View style={styles.viewImg}>
            <Image style={styles.image} source={{ uri: `${data.img}` }} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
