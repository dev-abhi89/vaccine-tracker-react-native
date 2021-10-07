/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider} from 'react-native-paper';
import React, {Component} from 'react';
import Appli from './routes/homeroute';
import LoginPRovider from './routes/loginPRovider';


 function Appmain(){
  return(
//use for subsribe login event
    <LoginPRovider>
      <Appli/> 
    </LoginPRovider>
  );
 }

export default function Main(){
//in this case provider use to spread materialUI
  return (<Provider>
       <Appmain/>
    </Provider>);
}


AppRegistry.registerComponent(appName, () => Main);
