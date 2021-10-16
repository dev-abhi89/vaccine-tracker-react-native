import storage from "@react-native-firebase/storage";
import ImagePicker from 'react-native-image-crop-picker';
import uuid,{v1 as uuidv1} from 'uuid';
import auth from '@react-native-firebase/auth';

import React,{useState} from 'react'
import { View,StyleSheet,Text,Image} from 'react-native'
import DatabaseServices from "../../../services/database_service";
import { Button, Colors, IconButton } from "react-native-paper";

export default function Certificate({url}) {

const [imgs,setImg]=useState();

const imgPicker= async()=>{
try{
    var im;
await ImagePicker.openPicker({cropping:false, writeTempFile:true}).then((i)=>{
 im=i.path;
});
uploadfunc(im);
}
catch(e){
    console.log(e);
    alert('choose correct image');
}

}



const uploadfunc = async(img)=>{
    const imName =auth().currentUser.uid;
    var flag=1;
    const ref = storage().ref().child('certificates').child(`${imName}.jpg`);
   await ref.putFile(img).catch((e)=>{
        flag=2;
        console.log(e);
        alert("error!! please try again later!");
    })
    if(flag==1){
       try{ const link= await ref.getDownloadURL();
         await   DatabaseServices.uploadCertificate(link,auth().currentUser.uid);
                alert("uploaded successfully");
    }
       catch(e){
          
           console.log(e);
           alert("error!! please try again later!");

       }
       
    }
}



    return (
        <View style={style.box}>
          <View style={{marginHorizontal:18,fexDirection:'row',justifyContent:'space-between'}}>
              <Text style={style.txt}>Certificate Section</Text>
              <IconButton icon="pencil" size={28} color='#ff9551' onPress={()=>{imgPicker();}} style={{position:'absolute',bottom:5,right:5,backgroundColor:'#ffdfca'}}/>

              </View>  
            
            { url==="" ? <></>:url==="unfill"?<Button mode='contained'onPress={()=>{imgPicker();}} style={style.btn}>
  Upload Certificate</Button>:<View>
      <Image style={style.img} source={{uri:url}}/>
      </View>}
      </View>

    );
}



const style = StyleSheet.create({

btn:{width:200,
     alignSelf:'center'},
img:{ height: 300,
    margin:10,
    borderRadius:8},
txt:{fontSize:20,
    fontWeight:'700',
     marginVertical:15,
    
    },
box:{
    elevation:20,
    color:'#f7efe1',

}



})