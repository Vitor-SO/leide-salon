import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import { SafeAreaView, View, Text, Image } from "react-native";
import { Button } from "../../Components/Button/indext";
import { styles } from "./styles";
import useInitialScreenController from "./view.controller";

export default function Initial() {
  const { Connect, isAuthenticated, AutoLogin } = useInitialScreenController();
  const navigation = useNavigation();

  useEffect(() => {
    AutoLogin();

    if (isAuthenticated) {
      navigation.navigate("home");
    }
  }, [isAuthenticated]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1541519481457-763224276691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxiZWF1dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
        />
      </View>

      <Text style={styles.title}>Bem Vinda ao</Text>
      <Text style={styles.title}>Salão da Leide</Text>
      <Text style={styles.subtitle}>
        Oferecemos os melhores serviços para que
      </Text>
      <Text style={styles.subtitle}>fique ainda mais linda.</Text>

      <View style={styles.viewButtons}>
        <Button title="ENTRAR" onPress={Connect} />
      </View>
    </SafeAreaView>
  );
}
