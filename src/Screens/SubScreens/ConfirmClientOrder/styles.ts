import { THEME } from './../../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  arrow:{
    paddingTop: 25,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textScreen:{
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    marginTop: 25

  },
  viewServices:{
    width: "100%",
    height: "100%",
    backgroundColor: "#FF69B4",
    marginTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20
  },
  title:{
    color: THEME.COLORS.BACKGROUND_900,
    fontSize: THEME.FONT_SIZE.MD,
    paddingTop: 15
  },
  subtitle:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  descService:{
    width: "100%",
    height: 50,
  },
  descSubtitle:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  button:{
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  }
});