import React from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';

import { styles } from './styles';

export function Services(){
  return (
    <SafeAreaView style={styles.container}>
      <Text>serviços</Text>
      <TextInput 
      style={styles.search}
      placeholder="Buscar 🔍" />

      
    </SafeAreaView>
  );
}