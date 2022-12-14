import { SafeAreaView, View, TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'


export function ActionModal({ handleClose, handleNavigation, address }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity style={{ flex: 1, zIndex: 9 }} onPress={handleClose}></TouchableOpacity>
            <View style={{
                flex: 0,
                marginVertical: 20,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: 'white',
                zIndex: 66,
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 25 }}>
                    <View style={{backgroundColor:'rgba(0,0,0,0.2)', borderRadius:100, width: 80, height: 80,}}>
                        <Image source={require('../assets/markers/google-maps.png')} style={{ width: 80, height: 80, borderRadius: 100, objectFit:'fill'}} />
                    </View>
                    <View style={{ flexDirection: 'column', paddingLeft: 10, paddingRight: 80 }}>
                        <Text style={{fontSize:18, fontFamily:'Inter-Bold', marginBottom:5}}>Sua Localização</Text>
                        <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Inter-Medium', maxWidth:'95%' }}>{`${address.street}, ${address.house} ${address.sublocality} - ${address.area}/${address.region}`}</Text>
                    </View>
                </View>
                <CustomButton label={'Criar relato'} onPress={handleNavigation} />
            </View>
        </SafeAreaView>
    )
}