import React ,{useState,} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

export default function HomeView({name,id,date}) {
    return (
        <View style={style.container} >
            <View style={[style.row,{elevation:15,backgroundColor:'white'}]} >
            <Text style={style.haeading}>
                Name
            </Text>
            <Text style={style.value}>
                {name}
            </Text>

            </View>
            <View style={[style.row,{elevation:15,backgroundColor:'white'}]} >
            <Text style={style.haeading}>
                Beneficiary Id
            </Text>
            <Text style={style.value}>
                {id}
            </Text>

            </View>
            <View style={[style.row,{elevation:15,backgroundColor:'white'}]} >
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


    container:{ backgroundColor:Colors.white,borderRadius:15,padding:10,elevation:10}
    ,row:{flexDirection:'row',marginVertical:1,paddingVertical:10 ,justifyContent:'space-around' },
    haeading:{
        fontSize:22,
        fontWeight:'900',
    },
    value:{
        fontSize:20,
        fontWeight:'600',
        textDecorationColor:Colors.purple700
    }

})

