import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../components/CustomButton';

import SelectList from 'react-native-dropdown-select-list'
import { getTypesNotifications } from '../services/api';

import { useNavigation, useRoute } from '@react-navigation/native';

const ReportsScreen = () => {

  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dataNotification, setDataNotification] = useState({});
  const [typesNotifications, setTypesNotifications] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  useEffect(() => {
    (async () => {
      let newArray = [];
      const response = await getTypesNotifications();
      response.forEach((item, index) => {
        newArray.push({ key: index + 1, value: item.type });
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
    navigation.navigate("SelectPicture", {
      data: {
        title,
        description,
        type: {
          selected,
          name: typesNotifications.find((item) => item.key === selected).value
        },
        address: data.address,
        location: data.geolocation,
      }
    });
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
          <Text style={{ fontSize: 34, fontFamily: 'Inter-Bold' }}>Relatando Problema</Text>
          <Text style={{ fontSize: 16, fontFamily: 'Inter-Regular', paddingRight: '20%', paddingVertical: 10 }}>Preencha as informações abaixo com o máximo de detalhes que puder.</Text>
        </View>
        <View style={{ padding: 14 }}>
          <TouchableOpacity style={{ padding: 13, borderRadius: 8, marginBottom: 20, borderColor: 'gray', borderWidth:1 }}>
            <TextInput
              placeholder='Titulo'
              placeholderTextColor = "#000"
              editable={true}
              value={title}
              onChangeText={(text) => setTitle(text)}
            ></TextInput>
          </TouchableOpacity>
          <View style={{ marginBottom: 20 }}>
            <SelectList setSelected={setSelected} data={typesNotifications} placeholder='Selecione a categoria' searchPlaceholder='Pesquise pelo nome...' />
          </View>
          <TouchableOpacity style={{ padding: 13, borderRadius: 8, marginBottom: 20, borderColor: 'gray', borderWidth:1 }}>
            <TextInput
              placeholder='Descrição'
              numberOfLines={10}
              multiline={true}
              editable={true}
              style={{height:90}}
              value={description}
              onChangeText={(text) => setDescription(text)}
            ></TextInput>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0, padding: 15 }}>
        <CustomButton label={'Continuar'} onPress={handleSendReport} />
      </View>
    </SafeAreaView>
  )
}

export default ReportsScreen