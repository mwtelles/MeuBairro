import React from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/images/illustrations/login.jpg')} style={{ height: 300, width: 300 }} />
        </View>
        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30, textAlign:'center' }}>Login</Text>
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, alignItems: 'center' }}>
          <MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput placeholder='Email' keyboardType='email-address' style={{ flex: 1, paddingVertical: 0, fontSize: 16 }} />
        </View>
        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, alignItems: 'center' }}>
          <MaterialIcons name="lock-outline" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput placeholder='Senha' keyboardType='default' secureTextEntry={true} style={{ flex: 1, paddingVertical: 0, fontSize: 16 }} />
          <TouchableOpacity>
          <Text style={{color:'#AD40AF', fontWeight: '700'}}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {}} style={{backgroundColor:'#AD40AF', padding:20, borderRadius: 10, marginBottom: 30}}>
          <Text style={{color:'white', textAlign:'center', fontWeight: '700', fontSize: 16}}>Login</Text>
        </TouchableOpacity>

        <Text style={{textAlign:'center', color:'#666',marginBottom:30}}>Ou, conecte-se com...</Text>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:30}}>
        <TouchableOpacity onPress={() => {}} style={{borderColor:'#4267B2', borderWidth:2, borderRadius:10, paddingVertical:10, paddingHorizontal:70, backgroundColor:'#4267B2'}}>
          <FontAwesome name="facebook-f" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{borderColor:'#DB4437', borderWidth:2, borderRadius:10, paddingVertical:10, paddingHorizontal:70, backgroundColor:'#DB4437'}}>
          <FontAwesome name="google" size={24} color="white" />
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
        <Text>Ainda não possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={{color:'#AD40AF',fontWeight:'700'}}> Cadastre-se</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;