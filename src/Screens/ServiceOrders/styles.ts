import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffff',
    marginBottom: 20,
    padding: 20,
    flexDirection: 'row',
    width: 360,
    borderRadius: 10
  },
  viewDesc:{
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  duration:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    opacity: 0.4
  },
  price:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  viewImg:{
    alignSelf: 'flex-end'
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 15,
    alignSelf: 'flex-end'
  },
});