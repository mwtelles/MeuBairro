import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';

const ReportsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View>
        <View style={{ backgroundColor: '#53E88B', width: '15%', padding: 15, marginLeft: 20, marginVertical: 10, borderRadius: 10, opacity: 0.8 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 28, fontFamily: 'Inter-Bold' }}>Preencha as suas informações</Text>
          <Text style={{ fontSize: 16, fontFamily: 'Inter-Regular', paddingRight: '30%', paddingVertical: 10 }}>Esses dados não serão exibidos no pedido para a sua anonimidade</Text>
        </View>
        <View style={{ padding: 14 }}>
          <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: 13, borderRadius: 8, marginBottom: 20 }}>
            <TextInput 
            placeholder='Localização'
            editable={false}
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 13, borderRadius: 8, marginBottom: 20 }}>
            <TextInput placeholder='Selecione o tipo do problema'></TextInput>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.1)', paddingLeft: 13, paddingRight: 13, paddingTop: 13, paddingBottom: '10%' ,borderRadius: 8, marginBottom: 20 }}>
            <TextInput 
            placeholder='Descrição'
            editable={true}
            maxLength={80}
            multiline={true}
            ></TextInput>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0, padding: 15 }}>
        <CustomButton label={'Continuar'} />
      </View>
    </SafeAreaView>
  )
}

export default ReportsScreen