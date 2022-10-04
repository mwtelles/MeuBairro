import React, { useContext, useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from "../context/AuthContext";
import Map from "../components/Map";
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [region, setRegion] = useState(null);

    const { userInfo } = useContext(AuthContext);

    useEffect(() => {
        getLocationPermission()
        getRegion()
    }, [])

      function getLocationPermission() {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
        })();
    }

    function getRegion(location) {
        (async () => {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location.coords.latitude, location.coords.longitude);
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    })();
    }
    

    return (
        <View style={{ flex: 1, }}>
            <View
                style={{
                    flexDirection: 'row',
                    zIndex: 2,
                    marginTop: 35,
                    maxWidth: '20%'
                    
                }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        padding: 10,
                        margin: 10,
                    }}>
                    <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Map 
            region={region}
            />
        </View>
    )
}