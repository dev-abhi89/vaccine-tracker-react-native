import React ,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import { Appbar, Button,Colors } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Authservice from '../../services/auth_service';
import Profile from './components/profile';
import DatabaseServices from '../../services/database_service';
import HomeView from './components/home_view';
import Certificate from './components/certificate';
export default function Home() {
 const [update,setUpdate]=useState(false); 
const [data,setData]=useState({name:"",
                                date:"",
                              id:"",
                              certificate:""});
const [form,setForm]=useState(false);

  useEffect(() => {
    
    const getdata = async () => {
      const snapshot = await firestore().collection('user').doc(auth().currentUser.uid).get();
      setData(snapshot._data);
      if(data.id === "unfill"){
        setForm(true);
      }
    };
 firestore().collection('user').doc(auth().currentUser.uid).onSnapshot(()=>{
  getdata();

 })


},[])
 
   return (
        <ScrollView style={styles.container} >
    <Appbar>
<Appbar.Content title="Home"/>
<Appbar.Action icon="logout" onPress={()=>Authservice.signout()} />
</Appbar>

            <Text  style={styles.headtitle}>Your Covid Details</Text>
           
           {data.id==="unfill"? <Profile/>:  <View>
          <HomeView name={data.name} id={data.id} date={data.date.toString()}/>
            </View>}

        
           <View>
           <Certificate url={data.certificate} />
           </View>
        </ScrollView>
    );
}


const styles=StyleSheet.create({
container:{
    flex:1
    ,backgroundColor:[Colors.amber200,Colors.brown200]
},
headtitle:{fontSize:24,
  fontWeight:'700',
  textAlign:'center'
}


});
