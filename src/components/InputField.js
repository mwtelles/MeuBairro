import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function InputField ({label,icon,inputType,keyboardType, fieldButtonLabel, fieldButtonFunction}) {
  return (
    <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, alignItems: 'center' }}>
          {icon}
          {inputType == 'password' ? ( <TextInput placeholder={label} keyboardType={keyboardType} 
          secureTextEntry={true} style={{ flex: 1, paddingVertical: 0, fontSize: 16 }} 
          /> ) : ( <TextInput placeholder={label} keyboardType={keyboardType} style={{ flex: 1, paddingVertical: 0, fontSize: 16 }} 
          />)}
          <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{color:'#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
        </View>
  )
}