import React from 'react';

import {
  Button,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface Props{
  title: string;
}

export function InitialButton({title, ...rest}:Props){
  return (
      <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
      </View>
    );
}

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FF69B4",
    padding: 10,
    borderRadius: 15
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff"
  }
});