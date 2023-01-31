import { StyleSheet } from 'react-native';
import { THEME } from '../../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view:{
    width: '100%',
    height: '100%',
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: THEME.COLORS.BACKGROUND_PINK_BUBBLEGUM,
    opacity: 0.8,
    marginTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon:{
    marginTop: 100,
    marginBottom: 20
  },
  text:{
    fontSize: 19,
    color: THEME.COLORS.TEXT,
    fontWeight: "bold"
  }
});