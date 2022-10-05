import React, { useContext, useState} from "react";
import { View, TouchableOpacity, Modal, Text} from "react-native";

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
        <View style={{ flex: 1, }}>
            <View
                style={{
                    flexDirection: 'row',
                    zIndex: 2,
                    marginTop: 15,
                    maxWidth: '20%'

                }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        padding: 18,
                        marginLeft: 15,
                        marginTop: 25,
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
                        borderRadius: 25,
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
                >
                <ActionModal 
                handleClose={() => setVisibleModal(false)}
                />
                </Modal>
            </View>
        </View>
    )
}