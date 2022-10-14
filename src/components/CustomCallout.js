import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomCallout = () => {
  return (
    <View style={{backgroundColor:'white', width:100, borderRadius:80, padding:10, left:75, bottom:-45 ,shadowColor:'#000', shadowOffset:{height:1, width:2}, shadowRadius:4, shadowOpacity:0.12}}>
      <View  style={{flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../assets/markers/clock.png')} style={{width:20, height:20}}/>
      <Text style={{paddingLeft:10, fontSize:15, fontFamily:'Inter-Medium'}}>7 dias</Text>

      </View>
    </View>
  )
}

export default CustomCallout