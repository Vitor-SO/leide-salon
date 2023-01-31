import { View, Text, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../../Theme";
import { useNavigation } from "@react-navigation/native";

//@ts-nocheck
export const ScreenConfirmation = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <AntDesign
          name="checkcircle"
          size={100}
          color={THEME.COLORS.SUCCESS2}
          style={styles.icon}
        />

        <Text style={styles.text}>Sua reserva foi feita com sucesso!</Text>
        <Text style={styles.text}>Estamos ansiosos pela sua presença!</Text>

        <Button
          bg={THEME.COLORS.SUCCESS2}
          h={60}
          mt={30}
          onPress={() => navigation.navigate("home")}
        >
          Voltar para a home
        </Button>
      </View>
    </SafeAreaView>
  );
};
