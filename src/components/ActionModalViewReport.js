import { SafeAreaView, View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

import { Ionicons } from '@expo/vector-icons';

export function ActionModalViewReport({ handleClose, handleNavigation, address }) {

    return (
        <SafeAreaView style={{ flex: 1, position:'absolute', bottom:'-15%', width:'100%'}}>
            <TouchableOpacity style={{ flex: 1, paddingVertical:'100%'}} onPress={handleClose}>
            </TouchableOpacity>

            <View style={{
                flex: 0,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 18,
                paddingBottom: 0,
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                elevation: 5,
                shadowOpacity: 0.28,
                shadowRadius: 4,
            }}>
                <View style={{}}>
                <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Inter-Medium', fontWeight: '700', paddingBottom: 10}}>Visualizando Relato de Buraco</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 25 }}>
                    <View style={{backgroundColor:'rgba(0,0,0,0.2)', padding:15, borderRadius:100}}>
                        <Ionicons name="location-outline" size={24} color="black" />
                    </View>
                    <View style={{ flexDirection: 'column', paddingLeft: 10, paddingRight: 80 }}>
                        <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'Inter-Medium', fontWeight: '700' }}>{`${address.street}, ${address.house} ${address.sublocality} - ${address.area}/${address.region}`}</Text>
                        <View style={{flexDirection:'row', paddingVertical:3}}>
                            <Text>📅</Text>
                            <Text style={{paddingLeft:5, fontSize:14}}>Relatado há 7 dias</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text>👍</Text>
                            <Text style={{paddingLeft:5, fontSize:14}}>20 Pessoas confirmaram</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <CustomButton label={'Visualizar Relato'} onPress={handleNavigation} />
                <TouchableOpacity>
                <Text style={{backgroundColor: 'rgba(0,0,0,0.05)', padding:20, borderRadius:8, fontSize:18}}>✔️</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                <Text style={{backgroundColor: 'rgba(0,0,0,0.05)', padding:20, borderRadius:8, fontSize:18}}>👍</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}