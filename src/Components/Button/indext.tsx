import React from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';

interface Props{
  title: string;
}

export function Button({title, ...rest}:Props){
  return (
        <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>
          {title}
        </Text>
      </TouchableOpacity>
    );
}

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF69B4",
    padding: 10,
    borderRadius: 15,
    width: 320,
    height: 60
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffff"
  }
});