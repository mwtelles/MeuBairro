import React from "react";
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView style={{paddingTop:50, paddingLeft:20, paddingRight:20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                <Text style={{fontSize:16}}>Olá Matheus Telles</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <ImageBackground source={require('../assets/images/illustrations/user-profile.jpg')} style={{width:35,height:35}} imageStyle={{borderRadius:25}} />
                </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', borderColor:'#C6C6C6', borderWidth:1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6}}>
                <MaterialIcons name="search" size={24} color="#C6C6C6" style={{marginRight:5}}/>
                    <TextInput placeholder="Pesquise"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}