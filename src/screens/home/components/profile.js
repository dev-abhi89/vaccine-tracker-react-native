import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import DatePicker from 'react-native-date-picker';
import auth, { firebase } from '@react-native-firebase/auth';
import { TextInput,Button,IconButton, Colors } from 'react-native-paper';
import DatabaseServices from '../../../services/database_service';
import {globalStyles} from '../../../styles/style'
import firestore from '@react-native-firebase/firestore';
export default function Profile({navigation}) {

    const [name,setName]=useState('');
    const [date,setDate]=useState(new Date());
    const [id,setId]=useState('');
    const [open, setOpen] = useState(false)

  useEffect(()=>{
    console.log("function");
   const getValues= async ()=>{
    const data = await firestore().collection('user').doc(auth().currentUser.uid).get();
    console.log(data._data.name);
    try{
    if(data!=null & data._data !=""){
  
      try{
      setName(data._data.name);
      //setDate(data._data.date);
      setId(data._data.id);
      }catch(e){console.log(e);}
    }}
    catch(e){console.log(e);}
  }
  getValues();
  },[]);

    function  validation(name, date,id){
        if(name=="" | id ==""| date==""){
          alert("please fill all the required field");
          return false;
        }
        if(id.length!=14){
          alert('Beneficiary id must have 14 digits only');
          return false;
        }
      return true;
      }


    return (
        <View style={style.container}>
            <View style={{marginVertical:10}}>
                <Text style={{fontSize:16,fontWeight:'600',color:Colors.red600}} >
                    Fill Your Details
                </Text>
                <View style={{marginHorizontal:30}}>

                <TextInput onChangeText={(val)=>setName(val)} value={name} left={<TextInput.Icon name="account" color={Colors.purple800} />} selectionColor={Colors.white}  type='flat' label="Full Name" style={[globalStyles.txt,globalStyles.round,{color:Colors.pink800,marginVertical:10,textAlign:'left',borderRadius:20}]} placeholder="Enter Your Full Name"/>
                <TextInput onChangeText={(val)=>setId(val)} value={id} left={<TextInput.Icon  name="key" color={Colors.purple800} />}  type='flat' selectionColor={Colors.white}   label="Beneficiary Id" style={[globalStyles.txt,globalStyles.round,{marginVertical:10,textAlign:'left',borderRadius:20}]}  placeholder="Enter Your Beneficiary ID" />
                <View style={{flexDirection:'row' ,justifyContent:'space-between' ,marginVertical:10}}>
                    <TextInput disabled={true} value={date.toDateString()} placeholder="Select your 1st dose" style={[globalStyles.txt,globalStyles.round,{width:250}]}  label="1st dose date"/>
                    
                    <IconButton  icon="clock" onPress={() => setOpen(true)} size={35} color={Colors.purple800} style={{}}/>
                </View>

                
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

<Button icon="send" onPress={()=>{ 
    if(validation(name,date,id)){
    DatabaseServices.setData(name,date.toDateString(),id,auth().currentUser.uid);}
   navigation.pop(); }} mode="contained" style={globalStyles.btn} >
SetDetails
  
  </Button>

                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        
        backgroundColor:'#ffffff'
    }
})