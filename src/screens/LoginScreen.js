import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/images/examples/logo-meubairro.png')} style={{ height: 300, width: 300 }} />
        </View>
        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight: '700', color: '#333', marginBottom: 30, textAlign: 'center' }}>Conecte-se</Text>
        <InputField
          label={'Email'}
          icon={<MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }}
          />}
          keyboardType='email-address'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <InputField
          label={'Senha'}
          icon={
            <MaterialIcons name="lock-outline" size={20} color="#666" style={{ marginRight: 5 }} />
          }
          inputType="password"
          fieldButtonLabel={"Esqueceu a senha?"}
          fieldButtonFunction={() => { }}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <CustomButton label={"Login"} onPress={() => {login(email, password)}} />

        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>Ou, conecte-se com...</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
          <TouchableOpacity onPress={() => { }} style={{ borderColor: '#4267B2', borderWidth: 2, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 70, backgroundColor: '#4267B2' }}>
            <FontAwesome name="facebook-f" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={{ borderColor: '#DB4437', borderWidth: 2, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 70, backgroundColor: '#DB4437' }}>
            <FontAwesome name="google" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
          <Text>Ainda n??o possui conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ color: '#15BE77', fontWeight: '700' }}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;