import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewUser:{
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 40,
    marginBottom: 20
  },
  icon:{
    width: 40,
    height: 40,
    marginRight: 20
  },
  name: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG
  },
  textSection:{
    paddingLeft: 20,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginBottom: 15,
    marginTop: 15
  },
  buttonView:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  viewEmptyOrders:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  emptyOrders:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    opacity: 0.6,
  }
});