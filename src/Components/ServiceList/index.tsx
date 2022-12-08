import React,{useContext} from 'react';

import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { styles } from './styles';

interface IServiceListProps{
  id: string;
  icon: string;
  title: string;
}

interface IProps{
  data: IServiceListProps;
}

import { Entypo } from '@expo/vector-icons';
import { ServicesViewContext } from '../../Contexts/ServicesView';
export function ServiceList({data}:IProps){
  const {handleServiceList} = useContext(ServicesViewContext)
  
  return (
    <View >
      <TouchableOpacity
      onPress={() => handleServiceList(data.title)}
      style={styles.container}>

      <View style={styles.iconView}>
      <Entypo name="scissors" size={40} color="black" />
      </View>
      <Text 
      numberOfLines={1}
       style={styles.title}>{data.title}
       
       </Text>
      </TouchableOpacity>

    </View>
  );
}