
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'
import useUserService from '../../Screens/UserServices/View.model';

interface IHeadingServiceCardProps{
  id?: string;
  type: string;
  title: string;
  imgURL: string;
  desc?: string;
  duration?: number;
  price: number;
}

interface IProps extends TouchableOpacityProps{
  data: IHeadingServiceCardProps;
}

export default function HomeUserServicesCard({data,...rest}:IProps){
  const {toPage} = useUserService()

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.leftView} {...rest}
          onPress={() => toPage(data)}
        >
        <Image source={{uri: data.imgURL}} style={styles.img}/>

        <View style={styles.describeView}>
        <Text style={styles.title}>{data.title}</Text>
          
          <View style={styles.desc}>
          <Text style={styles.items}>${data.price}</Text>
          <Text style={styles.items}>{`\u2022`}</Text>
          <Text style={styles.items}>{data.type}</Text>
          </View>

        </View>

        
        </TouchableOpacity>

        <TouchableOpacity style={styles.removeItemIcon}>
          <AntDesign  name="minuscircleo" size={40} color="red" />
        </TouchableOpacity>
    </View>
  );
}