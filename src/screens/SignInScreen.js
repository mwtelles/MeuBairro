import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
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
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/images/illustrations/login.jpg')} style={{ height: 300, width: 300 }} />
                </View>
                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30, textAlign: 'center' }}>Cadastro</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text>Já possui conta?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Conecte-se</Text>
                    </TouchableOpacity>
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
                    label={'Confirme sua senha'}
                    icon={
                        <MaterialIcons name="lock-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                    }
                    inputType="password"
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