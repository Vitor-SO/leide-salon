
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'

interface IHeadingServiceCardProps{
  imgURL: string;
  title: string;
  price: number;
  service: string;
}

interface IProps extends TouchableOpacityProps{
  data: IHeadingServiceCardProps;
}
export default function HomeUserServicesCard({data,...rest}:IProps){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
    <Image source={{uri: data.imgURL}} style={styles.imageService}/>

    <View style={styles.describeView}>
    <Text style={styles.title}>{data.title}</Text>
      
      <View style={styles.descItemsView}>
      <Text style={styles.descItems}>${data.price}</Text>
      <Text style={styles.descItems}>{`\u2022`}</Text>
      <Text style={styles.descItems}>{data.service}</Text>
      </View>

    </View>

    <AntDesign name="minuscircleo" size={40} color="red" />
  </TouchableOpacity>
  );
}