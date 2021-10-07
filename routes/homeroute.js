
import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/screens/home/home';
import Loading from '../src/loading';
import  {LoginContext} from './loginPRovider';
import AuthScreen from '../src/screens/auth_screen';
import { Header } from 'react-native/Libraries/NewAppScreen';
const Stk = createNativeStackNavigator();


export default function Appli(){
const {usr,loading} = useContext(LoginContext);
return (
  <NavigationContainer>


    
<Stk.Navigator>
{loading?<Stk.Screen name="Loadong" component={Loading}/>:usr?<Stk.Screen
  name="Home"
  component={Home}
  options={{headerShown:false}}/>:  
  <Stk.Screen
  name="Covid Track"
  options={{headerShown:false}}
  component={AuthScreen}

  />}
  
  <Stk.Screen
  name="Logintest"
  component={AuthScreen}

  />
  <Stk.Screen
  name="Hometest"
  component={Home}
  />
</Stk.Navigator>

  </NavigationContainer>
);

}