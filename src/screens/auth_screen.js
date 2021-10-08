import React, { Component, useState } from 'react';
import { Alert, Text, View, StyleSheet,Image } from 'react-native';
import { Appbar, Button, TextInput ,Colors} from 'react-native-paper';
import Authservice from '../services/auth_service';



export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [screen, setScreen] = useState(true);
  const [loading,setLoading]=useState(false);

  function validation(email, pass) {
    if (email == "" | pass == "") {
      alert("please fill all the required field");
      return false;
    }
    if (email.length < 4 | pass.length < 8) {
      alert('please fill with valild length ');
      return false;
    }
    return true;
  }
function cleardata(){
  setEmail('');
  setPass('');
}
  const signin = () => {
    if (validation(email, pass)) {
      setLoading(true);
      Authservice.login(email, pass).catch((e) => {
        console.log(e);
        alert("Email or Password is wrong");
        setLoading(false);

      })
    }
  }
  const signup = () => {
    if (validation(email, pass)) {
      setLoading(true);
      Authservice.signup(email, pass).catch((e) => {
        console.log(e);

        alert("something is wrong");
        setLoading(false);
      });
    }
  }


  return (
    <View style={{ backgroundColor:'#f7f1e5', flex: 1 }}>
      <Appbar>


        <Appbar.Content title={screen ? "Login" : "SignUp"}
        />
      </Appbar>

      
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}> Track Your Vaccine </Text>
      </View>

      <View style={style.container}>
        <Image style={style.img} source={require('../assets/images/three_doc.png')}/>
      <View style={{ marginHorizontal: 30 }}>
        <TextInput value={email} onChangeText={(val) => setEmail(val)} left={<TextInput.Icon name="email" />} type='flat' label="Email" onChange={() => setEmail} underlineColor="transparent" style={[style.input,style.round]} placeholder="Enter Your Email" />
        <TextInput value={pass} onChangeText={(val) => setPass(val)} left={<TextInput.Icon name="lock" />} type='flat' onChange={() => setPass} label="password" underlineColor="transparent" style={[style.input,style.round]} placeholder="Enter Your Password" secureTextEntry />

        <Button loading={loading}  icon="send" labelStyle={style.txt} mode="contained" style={style.btn} onPress={() => {
          screen ? signin() : signup();


        }}>
          {screen ? "Login" : "SignUp"}

        </Button>


        <Text style=
          {style.txt}  onPress={() =>
          {  setScreen(!screen); cleardata();}}>{screen ? 'Create a user account' : 'Switch to login page'}</Text>

      </View>
      </View>
    </View>
  );
}


const style = StyleSheet.create({
round:{
borderTopStartRadius:20,
borderTopEndRadius:20
}
  ,btn: {
    
    borderRadius: 20,
    width: 200, 
    alignSelf: 'center',
     marginTop: 20
  },
  txt:{ textAlign: 'center', 
  fontSize: 20,
   fontWeight: '600'
   },
   container:{
     flex:1,
     justifyContent:'center'
     ,flexDirection:"column"
   },
   img:{
     height:300,
width:'100%'
   
   },
   input:{
    marginVertical: 10,
     borderRadius: 20,
      Color: 'green' ,
      borderColor:'grey',

   }
   
})


