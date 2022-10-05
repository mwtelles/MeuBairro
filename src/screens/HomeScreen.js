import React, { useContext, useState} from "react";
import { View, TouchableOpacity, Modal, Text, StatusBar} from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../context/AuthContext";
import Map from "../components/Map";
import { ActionModal } from "../components/ActionModal";

export default function HomeScreen({ navigation }) {

    const { userInfo } = useContext(AuthContext);

    // const [pin, setPin] = React.useState({
    //     latitude: null,
    //     longitude: null,
    //   });

    const [visibleModal, setVisibleModal] = useState(false);

    const [visibleButton, setVisibleButton] = useState(false);

    return (
        <View style={{ flex: 1}}>
            <StatusBar barStyle="light" />
            <View style={{
                    flexDirection: 'row',
                    zIndex: 2,
                    maxWidth: '20%'}}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{
                        marginTop:'20%',
                        backgroundColor: 'rgba(231, 231, 231, 0.8)',
                        borderRadius: 12,
                        padding: 18,
                        marginLeft: 15,
                    }}>
                    <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Map
            />
            <View
                style={{
                    flexDirection: 'row-reverse',
                    zIndex: 2,
                    marginBottom: 35,
                    maxWidth: '100%',

                }}>
                <TouchableOpacity
                    visible={visibleButton}
                    onPress={() => { setVisibleModal(true)}}
                    style={{
                        backgroundColor: '#53E88B',
                        borderRadius: 12,
                        padding: 18,
                        marginRight: 15,
                        marginBottom: 25,
                    }}>
                    <MaterialIcons name="add" size={32} color="white" />
                </TouchableOpacity>
                <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
                animationType="slide"
                >
                <ActionModal 
                handleClose={() => setVisibleModal(false)}
                handleNavigation={() => {navigation.navigate('Relatar Problema');setVisibleModal(false)}}
                />
                </Modal>
            </View>
        </View>
    )
}