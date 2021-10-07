import React from 'react'
import { View, Text,ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={{flex:1,justifyContent:'center'}}>
           <ActivityIndicator color='blue' size="large"/>
        </View>
    )
}

export default Loading
