import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default class DatabaseServices{
uid = auth().currentUser.uid;
usr = firestore().collection('user');
static getdata= async()=>{ 
    console.log("function");
    return await firestore().collection('user').doc(auth().currentUser.uid).get().then((doc)=>{
    if(doc.exists){
            data= doc.data();
            console.log(data);
            return data;
    }
});}

static MakeData= async(name,date,id,certificate,uid)=> {
try {
   await firestore().collection('user').doc(uid).set({
        'name':name,
        'date':date,
        'id':id,
        'certificate':certificate
    })
} catch (error) {
    console.log(error);
    alert("Something is wrong ")
    
}

}
static setData= async(name,date,id,uid)=> {
    try {
       await firestore().collection('user').doc(uid).update({
            'name':name,
            'date':date,
            'id':id
            
        })
    } catch (error) {
        console.log(error);
        alert("Something is wrong ")
        
    }
    
    }
    

static uploadCertificate= async(link,uid)=>{
    try {
        await firestore().collection('user').doc(uid).update({
           'certificate':link
         });
}
catch(e){

    console.log(e);
    alert('unable to upload certificate');
 }

}


}