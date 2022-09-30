import { useEffect, useCallback } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const OnboardingScreen = () => {
    return (
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center' ,backgroundColor:'white'}}>
        <View>
          <Text style={{fontSize:30,fontWeight:'bold',color:'#20315f', marginTop:50, fontFamily: 'Roboto-Medium'}}>Meu Bairro</Text>
        </View>
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/images/illustrations/first_screen.jpg')} style={{ height: 300, width: 300 }} />
        </View>
        <TouchableOpacity 
        /* onPress={() => navigation.navigate('Login')} */
        style={{backgroundColor:'#AD40AF',padding:20,width:'90%',borderRadius:5,flexDirection:'row',justifyContent:'space-between', marginBottom:50}}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:18}}>Continuar</Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

export default OnboardingScreen;
