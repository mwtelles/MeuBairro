import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function InputField ({label,icon,inputType,keyboardType, fieldButtonLabel, fieldButtonFunction, value, onChangeText}) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.05)', padding: 15, borderRadius: 8, marginBottom: 20 }}>
          {icon}
          {inputType == 'password' ? ( 
          <TextInput 
          placeholder={label} 
          keyboardType={keyboardType} 
          secureTextEntry={true} 
          style={{ flex: 1, paddingVertical: 0, fontSize: 16 }}
          value={value}
          onChangeText={onChangeText}
          /> ) : ( <TextInput 
            placeholder={label} 
            keyboardType={keyboardType} 
            style={{ flex: 1, paddingVertical: 0, fontSize: 16 }}
            value={value}
            onChangeText={onChangeText} 
          />)}
          <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={{color:'#bbb', fontWeight: '700'}}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
        </View>
  )
}