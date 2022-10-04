import React, {useContext} from "react";
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 
import { AuthContext } from "../context/AuthContext";

export default function HomeScreen({navigation}) {

    const {userInfo} = useContext(AuthContext);

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView style={{paddingTop:50, paddingLeft:20, paddingRight:20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                <Text style={{fontSize:16}}>Olá {userInfo.result.user.name} </Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
                </View>

                
            </ScrollView>
        </SafeAreaView>
    )
}