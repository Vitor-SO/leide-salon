import React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Button } from '../../Components/Button/indext';
import HeadingServicesCard from '../../Components/HeadingServicesCard';
import HomeUserServicesCard from '../../Components/HomeUserServicesCard';

import { styles } from './styles';
import useHomeViewModel from './View.model';

export function Home(){
  const {Navigation,HeadingServicesHomeList,UserServiceOrderList} = useHomeViewModel()
  return (
    <ScrollView 
    nestedScrollEnabled={true}
    showsVerticalScrollIndicator={false}
    style={styles.container}>
      
      <View style={styles.viewUser}>
        <Image 
        source={require("../../Assets/Images/womanIcon.png")}
        style={styles.icon}
        />

        <Text style={styles.name}>
          Usúario
        </Text>
      </View>

      
        <Text style={styles.textSection}>Nossos Serviços</Text>
        <FlatList
        data={HeadingServicesHomeList}
        keyExtractor={(item) => item?.id}
        renderItem={({item})=>(
          <HeadingServicesCard 
          data={item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft:32, paddingRight: 64} }
      />
      

        <Text style={styles.textSection}>Seus Serviços</Text>
        {UserServiceOrderList.length > 0 ? <FlatList
        data={UserServiceOrderList}
        keyExtractor={(item) => item?.id}
        renderItem={({item})=>(
          <HomeUserServicesCard
          data={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft:32, paddingRight: 64} }
        maxToRenderPerBatch={3}
      />
      :
      <View style={styles.viewEmptyOrders}>
        <Text style={styles.emptyOrders}>Você não agendou nenhum serviço ainda.</Text>
      </View>
      }

      <View style={styles.buttonView}>
        <Button title='Agendar Serviço'
        onPress={Navigation}
        />
      </View>
    </ScrollView>
  );
}