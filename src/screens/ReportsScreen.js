import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';

import SelectList from 'react-native-dropdown-select-list'
import { getTypesNotifications } from '../services/api';

import { useNavigation } from '@react-navigation/native';

const ReportsScreen = () => {

  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dataNotification, setDataNotification] = useState({});

  const [typesNotifications, setTypesNotifications] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let newArray = [];
      const response = await getTypesNotifications();
      response.forEach((item, index) => {
        newArray.push({ key: index+1, value: item.type });
      });
      setTypesNotifications(newArray);
    })();
  }, [])

  const handleSendReport = () => {
    setDataNotification({
      title,
      description,
      type: selected,
    });
    navigation.navigate("SelectPicture", { dataNotification });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 13, borderRadius: 8, marginBottom: 20 }}>
            <TextInput
              placeholder='Titulo'
              editable={true}
              value={title}
              onChangeText={(text) => setTitle(text)}
            ></TextInput>
          </TouchableOpacity>
          <View style={{ marginBottom: 20 }}>
            <SelectList setSelected={setSelected} data={typesNotifications} onSelect={() => alert(selected)} placeholder='Selecione a categoria' searchPlaceholder='Pesquise pelo nome...' />
          </View>
          <TouchableOpacity style={{ backgroundColor: 'rgba(0,0,0,0.1)', paddingLeft: 13, paddingRight: 13, paddingTop: 13, paddingBottom: '10%', borderRadius: 8, marginBottom: 20 }}>
            <TextInput
              placeholder='Descrição'
              editable={true}
              maxLength={80}
              multiline={true}
              value={description}
              onChangeText={(text) => setDescription(text)}
            ></TextInput>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0, padding: 15 }}>
        <CustomButton label={'Continuar'} onPress={handleSendReport}/>
      </View>
    </SafeAreaView>
  )
}

export default ReportsScreen