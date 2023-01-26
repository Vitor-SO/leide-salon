import { THEME } from './../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textSection: {
    marginTop: 40,
    marginBottom: 15,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingLeft: 20
  },
  inputView:{
    paddingLeft: 20,
  },
  search:{
    backgroundColor: '#FFFFFF',
    width: 320,
    height: 60,
    borderRadius: 15,
    marginBottom: 15,
    paddingLeft: 20
  },
  titleSectionContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    paddingBottom: 200
  },
  titleSection:{
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    paddingLeft: 20,
    marginBottom: 15
  },
  modalizeView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalizeImage:{
    flex: 1,
    width: '100%',
    height: 220,
    borderRadius: 15,
  },
  closeIcon:{
    alignSelf: 'flex-end',
    margin: 5
  },
  descService:{
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 20
    
  },
  titleService:{
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    marginBottom: 10,
    marginTop: 10
  },
  viewDuration:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  duration: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.OVERLAY,
    marginLeft: 5
  },
  price: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: THEME.FONT_SIZE.MD,
    color: '#00C400',
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  line:{
    width: 370,
    color: THEME.COLORS.OVERLAY,
    opacity: 0.4,
    borderWidth: 0.5,
    marginBottom: 10
  },
  descTitle:{
    marginBottom: 10,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.BACKGROUND_900,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  descText:{
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_500,
    textAlignVertical: 'center',
    padding: 5
  },
  buttonAddService:{
    marginTop: 50
  },
  serviceDetailsContainer:{
    marginTop: 20
  },
  backContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  arrow:{
    paddingTop: 25,
    paddingLeft: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }

});