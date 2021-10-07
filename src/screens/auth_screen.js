import React, { Component, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import Authservice from '../services/auth_service';


export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [screen, setScreen] = useState(true);

  function  validation(email, pass){
    if(email=="" | pass ==""){
      alert("please fill all the required field");
      return false;
    }
    if(email.length<4| pass.length<8){
      alert('please fill with valild length ');
      return false;
    }
  return true;
  }

  const signin = () => {
    if(validation(email,pass)){
    Authservice.login(email, pass).catch((e) => {
      console.log(e);
      alert("Email or Password is wrong")
    })}
  }
  const signup = () => {
    if(validation(email,pass)){
    Authservice.signup(email, pass).catch((e) => {
      console.log(e);
      alert("something is wrong")
    });}
  }


  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Appbar>


        <Appbar.Content title={screen ? "Login" : "SignUp"}
        />
      </Appbar>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}> Track Your Vaccine </Text>
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <TextInput onChangeText={(val) => setEmail(val)} left={<TextInput.Icon name="email" />} type='flat' label="Email" onChange={() => setEmail} style={{ marginVertical: 10, borderRadius: 20, Color: 'green' }} placeholder="Enter Your Email" />
        <TextInput onChangeText={(val) => setPass(val)} left={<TextInput.Icon name="lock" />} type='flat' onChange={() => setPass} label="password" style={{ marginVertical: 10, borderRadius: 20, Color: 'green' }} placeholder="Enter Your Password" secureTextEntry />

        <Button icon="send" mode="contained" onPress={() => {
          screen ? signin() : signup();


        }}>
          {screen ? "Login" : "SignUp"}

        </Button>


        <Text style=
          {{ textAlign: 'center', fontSize: 20, fontWeight: '700' }} onPress={() =>
            setScreen(!screen)}>{screen ? 'Create a user account' : 'Switch to login page'}</Text>
          
      </View>
    </View>
  );
}





