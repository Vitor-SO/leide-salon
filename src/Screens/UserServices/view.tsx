import React, { useEffect } from 'react';

import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import { styles } from './styles';
import useUserService from './View.model'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { THEME } from '../../Theme';
import { useRoute } from '@react-navigation/native';
import { UserServicesType } from './model';
import { Button } from '../../Components/Button/indext';

function UserServices() {
  const route = useRoute()
  const serviceData = route.params as UserServicesType

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textSection}>Serviço Agendado</Text>

      <View style={styles.imgContainer}>
      <ImageBackground 
          style={styles.modalizeImage} 
          source={{uri: `${serviceData?.imgURL}`}}
          resizeMode={'cover'}
      />
      </View>

      <View style={styles.descService}>
            <Text style={styles.titleService}>{serviceData?.title}</Text>
            
            <View style={styles.viewDuration}>
              <MaterialIcons
              name='timer'
              size={21}
              color={THEME.COLORS.OVERLAY}
              />

              <Text style={styles.duration}>{serviceData?.duration} Horas/Minutos</Text>
            </View>

            <Text style={styles.price}>$ {serviceData?.price} reais</Text>
            <View style={styles.line}></View>
            <Text style={styles.descTitle}>Descrição do Serviço: </Text>
            <Text style={styles.descText}>{serviceData?.desc}</Text>
      </View> 


      <View style={styles.viewButton}>
          <Button title="Excluir"/>
      </View>
    </SafeAreaView>
  );
}

export default UserServices;