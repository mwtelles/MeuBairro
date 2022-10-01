import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useContext } from 'react'

import { Ionicons } from '@expo/vector-icons';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';

const CustomDrawer = (props) => {

    const { logout } = useContext(AuthContext);

    const { userInfo } = useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground
                    source={require('../assets/images/menu-bg.jpeg')}
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../assets/images/illustrations/user-profile.jpg')}
                        style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 20 }} />
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium' }}>{userInfo.result.user.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'baseline' }}>
                        <Ionicons name="ios-megaphone-outline" size={18} color="white" style={{ marginRight: 5 }} />

                        <Text style={{ color: '#fff', fontSize: 14, fontFamily: 'Roboto-Regular', marginTop: 5 }}>350 Interações</Text>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 15 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { logout() }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="md-exit-outline" size={22} color="black" />
                        <Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium', marginLeft: 5 }}>Desconectar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer