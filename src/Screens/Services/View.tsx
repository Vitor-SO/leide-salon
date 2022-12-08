import React, { useEffect,useContext, useRef } from 'react';

import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { ServiceDetailsCard } from '../../Components/ServiceDetailsCard';
import { ServiceList } from '../../Components/ServiceList';

import { styles } from './styles';
import useServicesViewModel from './View.model';
import { Modalize } from 'react-native-modalize';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { THEME } from '../../Theme';
import { Button } from '../../Components/Button/indext';
import { useRoute } from '@react-navigation/native';
import { ServicesParams } from '../../@types/navigation';


export function Services(){
  const {titleSection,servicesList,
    newDetailsCard,modalVisible,setModalVisible,
    modalService,Navigation,handleServiceList} = useServicesViewModel()
  const modalizeRef = useRef<Modalize>(null);
  const route = useRoute()
  const servicesParams = route.params as ServicesParams


  useEffect(() => {
    if(modalVisible){
      modalizeRef.current?.open()
    }
  }, [modalVisible])

  useEffect(() => {
    if(servicesParams != undefined){
      handleServiceList(servicesParams?.title)
    }
  },[servicesParams])
  
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textSection}>Serviços</Text>

      <View style={styles.inputView}>
        <TextInput 
        style={styles.search}
        placeholder="Buscar   🔍" />
      </View>

        <View>
        <FlatList
        data={servicesList}
        keyExtractor={(item) => item?.id}
        renderItem={({item})=>(
          <ServiceList
          data={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft:20} }
        maxToRenderPerBatch={3}
      />
        </View>
      
      <View style={styles.serviceDetailsContainer}>
      <Text style={styles.titleSection}>{titleSection !== '' ? titleSection : 'Corte de Cabelo'}</Text>
        
      
        <FlatList
        data={newDetailsCard}
        refreshing={true}
        keyExtractor={(item) => item?.id}
        renderItem={({item})=>(
          <ServiceDetailsCard
          data={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingLeft:20} }
        initialNumToRender={3}
        ListEmptyComponent={()=>(
          <Text>Sem serviços desse tipo ainda.</Text>
        )}
      />
      </View>

      <Modalize ref={modalizeRef}>
        <View style={styles.modalizeView}>
              

          <ImageBackground style={styles.modalizeImage} 
          source={{uri: `${modalService[0]?.img}`}}
          resizeMode={'cover'}
          >
          <TouchableOpacity onPress={() => {
            modalizeRef.current?.close()
            setModalVisible(false)
          }}
           style={styles.closeIcon}> 

                <MaterialIcons
                name="close"
                size={40}
                color={'#FFFFFF'}
                />  
              </TouchableOpacity>
          </ImageBackground>

          <View style={styles.descService}>
            <Text style={styles.titleService}>{modalService[0]?.title}</Text>
            
            <View style={styles.viewDuration}>
              <MaterialIcons
              name='timer'
              size={21}
              color={THEME.COLORS.OVERLAY}
              />

              <Text style={styles.duration}>{modalService[0]?.duration} Horas/Minutos</Text>
            </View>

            <Text style={styles.price}>$ {modalService[0]?.price} reais</Text>
            <View style={styles.line}></View>
            <Text style={styles.descTitle}>Descrição do Serviço: </Text>
            <Text style={styles.descText}>{modalService[0]?.desc}</Text>
          </View>

            <View style={styles.buttonAddService}>
              <Button title='Marcar Serviço' onPress={Navigation}/>
            </View>
        </View>
      </Modalize>

    </SafeAreaView>
  );
}