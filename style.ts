import { StyleSheet, PixelRatio } from 'react-native';
import Theme from '@/theme';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainView: {
    paddingHorizontal: 0,
    backgroundColor: 'white',
    paddingBottom: 150,
  },
  
  scrollview: {
    flex: 1,
  },
  
  mainText: {
    paddingHorizontal: 16,
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 20,
    marginBottom: 10,
  },

  text: {
    paddingHorizontal: 16,
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
    marginRight: -10,
  },
  text2: {
    paddingHorizontal: 16,
    color: '212428',
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
    marginRight: -10,
    textAlign: 'center',   
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },
  profile: {
    width: 82,
    height: 82,
    position : 'absolute',
    top:200,
    bottom:0,
    left:150,
    right:0,
  },

  cameraicon: {
    width: 30,
    height: 30,
    position : 'absolute',
    top:200,
    bottom:0,
    left:340,
    right:0,
  },

  cameraicon2: {
    width: 30,
    height: 30,
    position : 'absolute',
    top:250,
    bottom:0,
    left:210,
    right:0,
  },

  textInput: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    paddingHorizontal: 20,
    height: 42,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textInput2: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    paddingHorizontal: 20,
    height: 140,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textInput3: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    paddingHorizontal: 20,
    height: 42,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  mainHeader: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 102,
    marginBottom: 40,
  },
 
  customerIcon: {
    width: 30,
    height: 30,
  },

  buttonWrapper: {
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 'auto',
  },
  acttime: {
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 17,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 0,
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
  holidayLine2: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    paddingHorizontal: 20,
    height: 42,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'space-between',
  },

  holidayLine: {
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 17,
    marginLeft: 16,
    marginRight: 16,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
 
  camerauploadbackground: {
    width: '100%',
    height: 250,
  },
  line: {
    width: '100%',
    height: 10,
  },
  line2: {
    width: '100%',
    height: 1,
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

  headerWrapper: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 24,
  },

  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  noMargin: {
    marginBottom: 0,
  },
  formSubTitle: {
    color: Theme.colors.subPoint,
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 12,
  },
  tagWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 44,
  },
  
  genderBtn: {
    borderWidth: 2,
    borderColor: '#f4f4f5',
    paddingVertical: 11,
    paddingHorizontal: 21,
    borderRadius: 21,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f5',
    marginRight: 8,
  },

  tag: {
    marginBottom: 10,
  },

  genderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a8a8a8',
  },
  
});

export default styles;
