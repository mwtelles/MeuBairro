import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../context/AuthContext';

const SignInScreen = ({ navigation }) => {

    // const [name, setName] = useState(null);
    // const [login, setLogin] = useState(null);
    // const [password, setPassword] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [cpf, setCpf] = useState(null);
    // const [dataNascimento, setDataNascimento] = useState(null);
    // const [number, setNumber] = useState(null);
    // const [city, setCity] = useState(null);
    // const [logradouro, setLogradouro] = useState(null);
    // const [state, setState] = useState(null);
    // const [cep, setCep] = useState(null);
    // const [street, setStreet] = useState(null);
    // const [complement, setComplement] = useState(null);

    // const {register} = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ backgroundColor: '#53E88B', width: '15%', padding: 15, marginLeft: 30, marginVertical: 10, borderRadius: 10, opacity: 0.8 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                <View style={{ padding: 15, marginBottom:'5%' }}>
                    <Text style={{ fontSize: 28, fontFamily: 'Inter-Bold' }}>Preencha as suas informações</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Inter-Regular', paddingRight: '20%', paddingVertical: 10 }}>Esses dados não serão exibidos no pedido para a sua anonimidade</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Já possui conta?</Text>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ color: '#15BE77', fontWeight: '700' }}> Conecte-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <InputField
                    label={'Nome Completo'}
                    icon={<Ionicons name="person-outline" size={20} color="#666" style={{ marginRight: 5 }} />}
                // value={name}
                // onChangeText={text => setName(text)}
                />
                <InputField
                    label={'Email'}
                    icon={<MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }}
                    />}
                    keyboardType='email-address'
                // value={email}
                // onChangeText={text => setEmail(text)}
                />
                <InputField
                    label={'Senha'}
                    icon={
                        <MaterialIcons name="lock-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                    inputType="password"
                // value={password}
                // onChangeText={text => setPassword(text)}
                />
                <InputField
                    label={'Data de Nascimento'}
                    icon={
                        <MaterialIcons name="calendar-today" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={dataNascimento}
                // onChangeText={text => setDataNascimento(text)}
                />
                <InputField
                    label={'CPF'}
                    icon={
                        <MaterialIcons name="badge" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={cpf}
                // onChangeText={text => setCpf(text)}
                />

                <InputField
                    label={'Estado'}
                    icon={
                        <MaterialIcons name="map" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={state}
                // onChangeText={text => setState(text)}
                />
                <InputField
                    label={'Cidade'}
                    icon={
                        <MaterialIcons name="location-city" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={city}
                // onChangeText={text => setCity(text)}
                />
                <InputField
                    label={'Logradouro'}
                    icon={
                        <MaterialIcons name="location-history" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={logradouro}
                // onChangeText={text => setLogradouro(text)}
                />
                <InputField
                    label={'CEP'}
                    icon={
                        <MaterialIcons name="location-searching" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={cep}
                // onChangeText={text => setCep(text)}
                />
                <InputField
                    label={'Rua'}
                    icon={
                        <MaterialIcons name="location-on" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={street}
                // onChangeText={text => setStreet(text)}
                />
                <InputField
                    label={'Complemento'}
                    icon={
                        <MaterialIcons name="not-listed-location" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                // value={complement}
                // onChangeText={text => setComplement(text)}
                />

                <CustomButton
                    label={"Continuar"}
                    onPress={() => { }}
                />


            </ScrollView>
        </SafeAreaView>
    );
}

export default SignInScreen;