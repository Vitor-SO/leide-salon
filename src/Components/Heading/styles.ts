import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  viewText:{
    marginTop: 70,
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  subtitle: {
    fontSize: 17,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    opacity: 0.4,
  },
});