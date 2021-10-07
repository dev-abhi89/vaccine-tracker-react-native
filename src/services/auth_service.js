import auth from '@react-native-firebase/auth';
import DatabaseServices from './database_service';
export default class Authservice {
     static login=(email, pass)=>{
         return  auth().signInWithEmailAndPassword(email,pass);


     };
     static signup= async(email,pass)=>{
         usr= await auth().createUserWithEmailAndPassword(email,pass);
         if(usr!=null){
          await  DatabaseServices.MakeData("","","unfill","unfill",auth().currentUser.uid);
         }
         return usr;
     };
     static signout=()=>{
         return  auth().signOut();
     }



}