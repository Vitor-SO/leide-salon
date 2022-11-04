import React from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';
import { Button } from '../../Components/Button/indext';

import { styles } from './styles';

export function Login(){
  return (
    <SafeAreaView>
      <TextInput>
        Title
      </TextInput>

      <TextInput>
        Subtitle
      </TextInput>

      <Button title="Registrar"/>

    </SafeAreaView>
  );
}