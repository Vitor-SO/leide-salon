import {
  ActivityIndicator,
  View
} from 'react-native';
import { THEME } from '../../Theme';

export default function Loading(){
  return (
    <View>
      <ActivityIndicator color={THEME.COLORS.PRIMARY}/>
    </View>
  );
}