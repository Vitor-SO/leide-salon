import { THEME } from '../../Theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12
  },
  input:{
    backgroundColor: '#FFFFFF',
    width: 320,
    height: 60,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15
  },
  viewGoogleText:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  line:{
    width: 60,
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10 
  },
  viewImages:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30
  },
  icon:{
    marginRight: 30,
    width: 60,
    height: 60
  } 
});