import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
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