import UserLoginProvider, { UserLoginContext } from "../../Contexts/auth";
import { StyleSheet } from "react-native";
import React, { useContext } from "react";

import { Button, Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
}

export function InitialButton({ title, ...rest }: Props) {
  const { HandleGoogleSignIn } = useContext(UserLoginContext);

  return (
    <View>
      <TouchableOpacity
        {...rest}
        style={styles.button}
        onPress={() => HandleGoogleSignIn}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FF69B4",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",
  },
});
