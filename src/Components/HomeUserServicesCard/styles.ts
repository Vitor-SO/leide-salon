import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#FFCAF6",
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    marginRight:15
  },
  img:{
    width: 30,
    height: 30,
    borderRadius: 7,
  },
  describeView: {
    width: 200,
    flexDirection: 'column',
    paddingLeft: 5,
    justifyContent: "center",
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
  status:{
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  details:{
    width: 100,
    height: 60,
    backgroundColor: "#ffff",
    marginRight: 15,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  textDetails:{
    fontWeight: "bold",
  }

});