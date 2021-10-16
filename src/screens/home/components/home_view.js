import React ,{useState,} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, IconButton } from 'react-native-paper'

export default function HomeView({name,id,date, navigation}) {
    return (
        <View>
         <View style={{marginHorizontal:18,fexDirection:'row',justifyContent:'space-between'}}>
              <Text style={style.txt}>info Section</Text>
              <IconButton icon="pencil" size={28} color='#ff9551' onPress={()=>{navigation.navigate('profile')}} style={{position:'absolute',bottom:5,right:5,backgroundColor:'#ffdfca'}}/>

              </View>  
        <View style={style.container} >
          
            <View style={[style.row]} >
            <Text  style={style.haeading}>
                Name
            </Text>
            <Text style={style.value}>
                {name}
            </Text>

            </View>
            <View style={[style.row]} >
            <Text style={style.haeading}>
                Beneficiary Id
            </Text>
            <Text style={style.value}>
                {id}
            </Text>

            </View>
            <View style={[style.row,{paddingBottom:20}]} >
            <Text style={style.haeading}>
                Date of 1st dose
            </Text>
            <Text style={style.value}>
                {date}
            </Text>

            </View>

        </View>
        </View>
    )
}

const style = StyleSheet.create({
//f7efe1
//f7f1e5
    container:{backgroundColor:'#f7efe1',marginTop:2,margin:10 ,backgroundColor:Colors.white,borderRadius:15,padding:10,elevation:10}
    ,row:{flexDirection:'row',marginVertical:1,paddingVertical:10 ,justifyContent:'space-between' },
    haeading:{
        textAlign:'right'
        ,fontSize:22,
        fontWeight:'700',
    },
    value:{
        fontSize:20,
        fontWeight:'600',
        textDecorationColor:Colors.purple700
    }
    ,
txt:{fontSize:20,
    fontWeight:'700',
     marginVertical:15,
    
    }

})

