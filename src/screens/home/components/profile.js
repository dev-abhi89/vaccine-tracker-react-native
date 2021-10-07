import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import DatePicker from 'react-native-date-picker';
import auth from '@react-native-firebase/auth';
import { TextInput,Button,IconButton, Colors } from 'react-native-paper';
import DatabaseServices from '../../../services/database_service';
export default function Profile() {

    const [name,setName]=useState('');
    const [date,setDate]=useState(new Date());
    const [id,setId]=useState('');
    const [open, setOpen] = useState(false)
  
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

                <TextInput onChangeText={(val)=>setName(val)} val={name} left={<TextInput.Icon name="account" />}  type='flat' label="Full Name" style={{marginVertical:10,borderRadius:20}}  placeholder="Enter Your Full Name"/>
                <TextInput onChangeText={(val)=>setId(val)} val={name} left={<TextInput.Icon name="key" />}  type='flat' label="Beneficiary Id" style={{marginVertical:10,borderRadius:20}}  placeholder="Enter Your Beneficiary ID" />
                <View style={{flexDirection:'row' ,justifyContent:'space-between' ,marginVertical:10}}>
                    <TextInput disabled={true} value={date.toDateString()} placeholder="Select your 1st dose"  label="1st dose date"/>
                    
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
    DatabaseServices.setData(name,date.toDateString(),id,auth().currentUser.uid);}}} mode="contained" style={{marginVertical:10}} >
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