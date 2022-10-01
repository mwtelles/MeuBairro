import React from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const SignInScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/images/illustrations/login.jpg')} style={{ height: 300, width: 300 }} />
                </View>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30, textAlign: 'center' }}>Cadastro</Text>
                <InputField
                    label={'Nome Completo'}
                    icon={<Ionicons name="person-outline" size={20} color="#666" style={{ marginRight: 5 }} />}
                />
                <InputField
                    label={'Email'}
                    icon={<MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }}
                    />}
                    keyboardType='email-address'
                />
                <InputField
                    label={'Senha'}
                    icon={
                        <MaterialIcons name="lock-outline" size={20} color="#666" style={{ marginRight: 5 }}/>
                    }
                    inputType="password"
                />
                <InputField
                    label={'Confirme sua senha'}
                    icon={
                        <MaterialIcons name="lock-outline" size={20} color="#666" style={{ marginRight: 5 }}/>
                    }
                    inputType="password"
                />

                <CustomButton 
                    label={"Continuar"}
                    onPress={() => {}}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text>Já possui conta?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Conecte-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;