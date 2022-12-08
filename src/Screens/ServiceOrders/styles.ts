import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15
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
  textScreen:{
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    marginTop: 25

  },
  textSection:{
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginTop: 15
  },
  viewqtdPeople:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15
    
  },
  select: {
    backgroundColor: '#FF69B4',
    width: '35%',
    height: 35,
    marginTop: 15,
    borderRadius: 10,
  },
  selectDropdown: {
    backgroundColor: '#FF69B4',
    borderRadius: 10,
  },
  selectRow:{
    borderBottomColor: '#fff'
  },
  viewSelectData: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  viewSelectedData:{
    width: '35%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
  },
  selectedData:{
    color: "#000",
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD
  },
  viewqtdTextSection:{
    width: '60%'
  },
  buttonSubmit:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  TextAreaView:{
    width: '100%',
    height: 100,
    marginTop: 15
  }
});