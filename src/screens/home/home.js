import React ,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,ScrollView, Image } from 'react-native';
import { Appbar, Button,Colors } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Authservice from '../../services/auth_service';
import Profile from './components/profile';
import DatabaseServices from '../../services/database_service';
import HomeView from './components/home_view';
import Certificate from './components/certificate';



export default function Home({navigation}) {
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
           
           {data.id==="unfill"? <Profile navigation={navigation}/>:  <View>
          <HomeView name={data.name} id={data.id} date={data.date.toString()} navigation={navigation}/>
            </View>}

        
           <View>
           <Certificate url={data.certificate} />
           </View>
           <View style={styles.view}>
             <Text style={styles.head1}> Do GaJ Ki Doori </Text>
             <Text style={styles.head2}> Mask he Jaroori</Text>
             <Image source={require('../../assets/images/three_girl.png')} style={styles.img}/>
           </View>
           <View style={{flexDirection:'row'}}>
<View style={{width:'50%',marginTop:40}}>
  <Text style={styles.slothead}>Find Your</Text>
  <Button icon="search-web" labelStyle={styles.txt} mode="contained" onPress={()=>{navigation.navigate("Find your vaccination slot")}} style={styles.btn}>Vaccination</Button>
  <Text style={styles.slothead2}>Slot</Text>
</View>
<Image source={require('../../assets/images/mask_doc.png')} style={styles.docimg}/>
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
},
img:{
width:'100%',
  height:200
},
view:{
  marginVertical:30,

},
head1:{
  fontSize:28,
  fontWeight:'700',
  textAlign:'left'
  ,marginLeft:10
  ,marginBottom:8
  ,color:'#ff9551'
},
head2:{
  fontSize:28,
  fontWeight:'700',
  textAlign:'right'
  ,marginRight:20
  ,marginBottom:10,
  color:'#afa4aa'
},
docimg:{
  width:'50%',
  height:250
},
slothead:{
  fontSize:40,
  marginLeft:20
  ,fontWeight:'700'
  ,color:'#ff9551',


},
slothead2:{
  fontSize:40,
  marginRight:20
  ,fontWeight:'700'
  ,color:'#ff9551',
  textAlign:'right'


},
round: {
  borderTopStartRadius: 20,
  borderTopEndRadius: 20
}
, btn: {

  borderRadius: 20,
  width: 200,
  alignSelf: 'center',
  marginTop: 2
  ,backgroundColor:'#ff9551'

},
txt:{
  fontSize:18,
  fontWeight:'700'
}

});
