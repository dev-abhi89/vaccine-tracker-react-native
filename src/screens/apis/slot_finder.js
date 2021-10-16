import React , {useState} from 'react';
import {ScrollView ,View, Text , StyleSheet} from 'react-native';
import { Button, DefaultTheme, TextInput,Colors } from 'react-native-paper';




export default function SlotFinder() {
const [pincode, setPincode] = useState('');

function todayDate(){
const date = new Date();
const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();
const dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
return dateString;
}


const [dat,setData] = useState({sessions:[
]});
const [list ,setList]=useState(false);
const searchfunc = async (val) => {
    try {
        const date= todayDate();
     const response = await fetch(`http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${val}&date=${date}`);
     const json = await response.json();
     if(json.hasOwnProperty('sessions')){
     if(json.sessions.length===0){
        alert("please enter valid details")
    }
    else {
        setData(json);
        setList(true);
    }
}
else{
    alert('enter valid details');
}
    
       } catch (error) {
     console.error(error);
   }
 }



    return (
        <View>
            <View style={{marginHorizontal:20, marginVertical:15}}>
            <TextInput theme={{  colors: {
                    text: 'black', primary: '#ff9551',
                    underlineColor: 'transparent', 
            } }}   label="enter your pincode"  value={pincode} onChangeText={(val)=>setPincode(val)}   keyboardType='number-pad' style={style.input}/>
            <Button icon="search-web" labelStyle={style.txt}  mode="contained" onPress={()=>{searchfunc(pincode)}} style={style.btn}>Search</Button>
            
            </View>{list?
          <View> 
              <View style={{height:4,elevation:3,marginBottom:4,backgroundColor:'white'}}></View>
               <ScrollView style={[{marginVertical:20,elevation:-5, paddingTop:5,backgroundColor:'#E9DCC9'}] } overScrollMode='auto'>
                
            {dat.sessions.map((i)=>{
                return (<View key={i.session_id} style={{elevation:5,backgroundColor:'#f5f0f6',marginBottom:5 ,borderRadius:25, borderWidth:(i.available_capacity_dose1==0?(i.available_capacity_dose2==0?0:2):2), borderColor:'#ff9551'}}>
                    <Text style={[style.tiletxt,{marginLeft:20}]}>{i.block_name}</Text>
                    <Text style={[{ fontSize:18,
        fontWeight:'500',marginLeft:20,color:'#8f8f8f'}]}>{i.address}</Text>

                    <View style={{marginVertical:18,flexDirection:'row' ,justifyContent:'space-evenly'}}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={style.tiletxt}>Dose 1</Text>
                            <Text style={[style.tileans,{ color:(i.available_capacity_dose1==0?'black':'#ff9551')}]} >{i.available_capacity_dose1}</Text>
                        </View>
                        <View style={{flexDirection:'column'}}>
                            <Text style={style.tiletxt}>Dose 2</Text>
                            <Text style={[style.tileans,{ color:(i.available_capacity_dose2==0?'black':'#ff9551')}]}>{i.available_capacity_dose2}</Text>
                        </View>
                       
                    </View>
                </View>);
            })}

            </ScrollView></View>:<></>}

        </View>
    )
}


const style = StyleSheet.create({

    container:{flex:1 ,},
    head:{fontSize:20,textAlign:'center',fontWeight:'700'},
    input: {
        marginVertical: 10,
        borderRadius: 20,
        Color: 'green',
        borderColor: 'grey',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        textDecorationColor:'#ff9551'
    
      },
   
      btn: {

        borderRadius: 20,
        width: 200,
        alignSelf: 'center',
        marginTop: 2
        ,backgroundColor:'#ff9551'
      
      },
      txt:{
        fontSize:18,
        fontWeight:'700'
      },
      tiletxt:{
        fontSize:18,fontWeight:'800',marginTop:8
      },
      tileans:{
          fontSize:18,
          fontWeight:'600'
          ,textAlign:'center',
      },
     
      
})