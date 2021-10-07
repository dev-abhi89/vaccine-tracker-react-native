import React, {useState,useEffect} from 'react'
import auth,{ FirebaseAuthTypes } from '@react-native-firebase/auth';


export const LoginContext = React.createContext(LoginContext);

export default function LoginPRovider(props) {

const [usr, setUsr] = useState(null);
const [loading, setLoading]= useState(true); 

const Authchange= (usr)=>{
    setUsr(usr);
    setLoading(false);
}
useEffect(()=>{
const subscriber = auth().onAuthStateChanged(Authchange);
return subscriber;

},[])


    return (
    <LoginContext.Provider value={{usr,loading}}>{props.children}</LoginContext.Provider>
    
        );
}
