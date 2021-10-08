import React ,{useState,} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

export default function HomeView({name,id,date}) {
    return (
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
            <View style={[style.row]} >
            <Text style={style.haeading}>
                Date of 1st dose
            </Text>
            <Text style={style.value}>
                {date}
            </Text>

            </View>

        </View>
    )
}

const style = StyleSheet.create({
//f7efe1
//f7f1e5
    container:{backgroundColor:'#f7efe1',marginTop:20,margin:10 ,backgroundColor:Colors.white,borderRadius:15,padding:10,elevation:10}
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

})

