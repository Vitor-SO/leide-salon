import React from 'react';

import {
  Text,
  View
} from 'react-native';

import { styles } from './styles';

interface Props {
  title: string;
  subtitle: string;
  subtitle2?: string;
}

export function Heading({title,subtitle,subtitle2}:Props){
  return (
    <View style={styles.viewText}>
      <Text style={styles.title}>
       {title} 💇
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

      <Text style={styles.subtitle}>
      {subtitle2}
      </Text>
      </View>
  );
}