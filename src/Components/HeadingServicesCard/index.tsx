
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../Theme';

interface IHeadingServiceCardProps{
  imgURL: string;
  title: string;
}

interface IProps extends TouchableOpacityProps{
  data: IHeadingServiceCardProps;
}
export default function HeadingServicesCard({data,...rest}:IProps){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{uri: data.imgURL}} style={styles.cover}>
      <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
        <Text style={styles.ads}>
          {data.title}
        </Text>
      </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}