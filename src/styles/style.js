//some styles that globally used 


import { StyleSheet } from 'react-native';
export const globalStyles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: "#eaeaea"
},
round: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  }
  , btn: {

    borderRadius: 20,
    width: 250,
    alignSelf: 'center',
    marginTop: 20
  },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    borderRadius:20
    
  },
  container: {
    flex: 1,
    justifyContent: 'center'
    , flexDirection: "column"
  },
});







