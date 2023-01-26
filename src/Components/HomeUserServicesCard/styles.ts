import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  leftView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img:{
    width: 60,
    height: 60,
    borderRadius: 7,
  },
  describeView: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  desc:{
    flexDirection: 'row',
  },
  title:{
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  items:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    opacity: 0.6,
    marginRight: 10
  },
  removeItemIcon: {
    alignSelf: 'flex-end',
    paddingBottom: 20,
  }

});