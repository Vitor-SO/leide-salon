import React from 'react';
import { styles } from './styles';

import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';

import { Button } from '../../Components/Button/indext';
import { Heading } from '../../Components/Heading';
// import googleIcon from "../../Assets/Images/google.png";

export default function Login(){
  return (
    <SafeAreaView style={styles.container}>
      <Heading title="Bem Vinda de Volta"
       subtitle='Entre com a sua conta para ter acesso'
       subtitle2='aos nossos serviços'
       />

      <View style={styles.inputView}>
      <TextInput 
      style={styles.input}
       placeholder="Nome de usúario"/>

      <TextInput 
      style={styles.input}
      placeholder="Email"
      />

      <TextInput 
      style={styles.input}
      placeholder="Senha"
      />
      </View>

      <Button title="Entrar"/>

        <View style={styles.viewGoogleText}>
          <View style={styles.line}></View>
          <Text>Ou conecte-se com </Text>
          <View style={styles.line}></View>
      </View>

      <View style={styles.viewImages}>
        <Image style={styles.icon} source={require("../../Assets/Images/google.png")} />
        <Image style={styles.icon} source={require("../../Assets/Images/apple.png")}/>
        <Image style={styles.icon} source={require("../../Assets/Images/instagram.png")}/>
      </View>

    </SafeAreaView>
  );
}