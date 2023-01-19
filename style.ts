import { StyleSheet, PixelRatio } from 'react-native';
import Theme from '@/theme';

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 53,
  },
  mainHeader: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 102,
    marginBottom: 40,
  },
  mainText: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'normal',
    marginTop: 10,
    marginBottom: 86,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 'auto',
  },
  button: {
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 17,
    width: 343,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f5',
    marginTop: 10,
    marginBottom: 10,
  },

  

  buttonHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#020202',

  
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#a8a8a8',
  },
  customerIcon: {
    width: 30,
    height: 30,
  },
  activatedBtn: {
    borderWidth: 2,
    borderColor: Theme.colors.main,
    backgroundColor: 'white',
  },
  activatedText: {
    color: Theme.colors.main,
  },
  gap: {
    width: '3%',
  },
});

export default styles;
