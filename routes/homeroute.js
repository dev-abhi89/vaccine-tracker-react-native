
import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/screens/home/home';
import Loading from '../src/loading';
import  {LoginContext} from './loginPRovider';
import AuthScreen from '../src/screens/auth_screen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Profile from '../src/screens/home/components/profile';
import SlotFinder from '../src/screens/apis/slot_finder';
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

  <Stk.Screen name="profile" component={Profile}/>
  <Stk.Screen name="Find your vaccination slot" component={SlotFinder} />
</Stk.Navigator>

  </NavigationContainer>
);

}