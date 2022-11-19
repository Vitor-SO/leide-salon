import React from 'react';

import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ServiceDetailsCard } from '../../Components/ServiceDetailsCard';

import { styles } from './styles';
import useServicesOrdersViewModel from './View.model';

function ServiceOrders(){
  const {dataServiceOrders} = useServicesOrdersViewModel()
  return (
    <SafeAreaView style={styles.container}>
      <Text>Marcar Serviço</Text>

      <Text>{dataServiceOrders.type}</Text>

      <View>

      <TouchableOpacity
    style={styles.touchContainer}>
        <View style={styles.viewDesc}>
          <Text style={styles.title}>{dataServiceOrders.title}</Text>
          <Text style={styles.duration}>{dataServiceOrders.duration} min</Text>
          <Text style={styles.price}>$ {dataServiceOrders.price}</Text>
        </View>
        
        <View style={styles.viewImg}>
        <Image
        style={styles.image}
        source={{uri: `${dataServiceOrders.img}`}}/>
        </View>
      </TouchableOpacity> 
      </View>
    </SafeAreaView >
  );
}

export default ServiceOrders;