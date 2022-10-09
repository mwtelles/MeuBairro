import React, { useContext, useState, useCallback } from "react";
import { View, TouchableOpacity, Modal, Text, StatusBar } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../context/AuthContext";
import Map from "../components/Map";
import { ActionModal } from "../components/ActionModal";
import { ActionModalViewReport } from "../components/ActionModalViewReport";
import { api } from '../services/api';

export default function HomeScreen({ navigation }) {

    const { userInfo } = useContext(AuthContext);

    // const [pin, setPin] = React.useState({
    //     latitude: null,
    //     longitude: null,
    //   });

    const [location, setLocation] = useState([]);
    const [address, setAddress] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const [visibleButton, setVisibleButton] = useState(false);

    const [isVisible, setIsVisible] = useState(false);


    const getUserLocation = useCallback((location) => {
        setLocation([location.coords.latitude, location.coords.longitude]);
    }, [])

    const getModalReportView = useCallback((openModalReportView) => {
        setIsVisible(openModalReportView);
    }, [])

    const openNotificationModal = async (location) => {

        try {
            const response = await api.get('/ReverseGeocode', { params: { location: `${location[0]}, ${location[1]}` } });
            const data = response.data.results;
            let address = data.find((item) => item.location_type === 'centroid' && item.type === 'route');
            setAddress(address);
            setVisibleModal(true)
        } catch (err) {

            console.log(err);

        }

    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light" />
            <View style={{
                flexDirection: 'row',
                zIndex: 2,
                maxWidth: '20%'
            }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{
                        marginTop: '20%',
                        backgroundColor: 'rgba(231, 231, 231, 0.8)',
                        borderRadius: 12,
                        padding: 18,
                        marginLeft: 15,
                    }}>
                    <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Map userLocation={getUserLocation} modalReportView={getModalReportView} />
            <View style={{ flexDirection: 'row-reverse', zIndex: 2, marginBottom: 35, maxWidth: '100%' }}>
                <TouchableOpacity
                    visible={visibleButton}
                    onPress={() => openNotificationModal(location)}
                    style={{ backgroundColor: '#53E88B', borderRadius: 12, padding: 18, marginRight: 15, marginBottom: 25 }}>
                    <MaterialIcons name="add" size={32} color="white" />
                </TouchableOpacity>
                <Modal
                    visible={visibleModal}
                    transparent={true}
                    onRequestClose={() => setVisibleModal(false)}
                    animationType="slide"
                >
                    <ActionModal
                        address={address}
                        handleClose={() => setVisibleModal(false)}
                        handleNavigation={() => { navigation.navigate('Relatar Problema'); setVisibleModal(false) }}
                    />
                </Modal>
                {isVisible && (
                    <ActionModalViewReport
                        address={address}
                        handleClose={() => setIsVisible(false)}
                        handleNavigation={() => { navigation.navigate('Relatar Problema'); setIsVisible(false) }} />
                )}

            </View>
        </View>
    )
}