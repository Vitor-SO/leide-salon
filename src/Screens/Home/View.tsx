import React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import HeadingServicesCard from '../../Components/HeadingServicesCard';
import { data } from './model';

import { styles } from './styles';

export function Home(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewUser}>
        <Image 
        source={{uri: "../../Assets/Images/womanIcons.png"}}
        style={styles.icon}
        />

        <Text>
          Usúario
        </Text>
      </View>
      <View>
        <Text>Nossos Serviços</Text>
        <FlatList
        data={data}
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
      </View>
    </SafeAreaView>
  );
}