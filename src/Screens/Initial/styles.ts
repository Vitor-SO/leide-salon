import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imgContainer: {
    marginTop: 50,
    marginBottom: 1
  },
  title: {
    fontSize: 60,
    fontFamily: THEME.FONT_FAMILY.ISLAND_REGULAR
  },
  subtitle: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontWeight: 'bold',
    opacity: 0.6
  },
  signin:{
    fontSize: THEME.FONT_SIZE.SM
  },
  login:{
    fontSize: THEME.FONT_SIZE.SM
  },
  button:{
    width: 100,
    height: 40
  },
  image:{
    width: 345,
    height: 300,
    borderRadius: 35,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  viewButtons:{
    width: 350,
    height: 70,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  }
});