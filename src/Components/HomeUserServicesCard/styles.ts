import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  imageService:{
    width: 60,
    height: 60,
    borderRadius: 7
  },
  describeView: {
    flexDirection: 'column'
  },
  descItemsView:{
    flexDirection: 'row',
  },
  title:{
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  descItems:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    opacity: 0.6,
    marginRight: 10
  },
 
});