import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 100,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#FFFFFF",
    padding: 5
  },
  iconView:{
    backgroundColor: "#FF69B4",
    width: '100%',
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 5
  },
  icon:{

  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    opacity: 0.5
  }

});