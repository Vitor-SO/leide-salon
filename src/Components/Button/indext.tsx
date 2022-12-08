import React from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps{
  title: string;
  width?: number | string;
  height?: number | string;
  color?: string;

}

export function Button({title,width,height,color, ...rest}:Props){

  return (
        <TouchableOpacity
         style={ (width && height) ? [{width: width, height: height},styles.buttonProps]: styles.button}
         {...rest}
         >
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
  buttonProps:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF69B4",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffff"
  }
});