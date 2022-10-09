import { View, Dimensions, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Callout } from 'react-native-maps';


import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import * as Location from 'expo-location';

import { Circle, Marker } from 'react-native-maps';
import { ActionModalViewReport } from './ActionModalViewReport';

const { width, height } = Dimensions.get('screen')

const Map = ({ userLocation, modalReportView }) => {

  const [userFirstLocation, setUserFirstLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  const [region, setRegion] = useState(null);

  const [pin, setPin] = React.useState({
    latitude: -22.4070467,
    longitude: -43.66119,
  });



  function openModalReportView(data) {
    if (data) {
      modalReportView(true);
    }
  }

  useEffect(() => {
    getLocationPermission()
    getUserLocation()
  }, [])

  function getLocationPermission() {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('A Permissão para acessar a localização foi negada!');
        return;
      }
    })();
  }

  function getUserLocation(location) {
    if (location) {
      const { latitude, longitude } = location;
      setUserFirstLocation(location);
      if (latitude !== userFirstLocation.latitude) {
        (async () => {
          let location = await Location.getCurrentPositionAsync({});
          setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
          userLocation(location);
        })();
      }
    }
  }

  return (
    <View style={{
      flex: 1,
      zIndex: 1,
      marginTop: '-18%',
    }}>
      <MapView
        style={{
          width: width,
          height: height,
        }}
        mapType='standard'
        showsMyLocationButton={true}
        minZoomLevel={16}
        maxZoomLevel={19}
        rotateEnabled={false}
        region={region}
        showsUserLocation={true}
        onUserLocationChange={(location) => getUserLocation(location.nativeEvent.coordinate)}
        loadingEnabled={true}
        showsBuildings={false}
        showsTraffic={false}
        showsIndoors={false}
        showsPointsOfInterest={false}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: -22.4070233,
          longitude: -43.6610083,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -22.4070233,
            longitude: -43.6620083,
          }}
          onPress={(data) => openModalReportView(data)}
        >
          <>
            <View>
              <FontAwesome name="map-marker" size={25} color="green" />
            </View>

            <Callout style={{position:'absolute', backgroundColor:'red', width:'100%'}}>
              <View style={{ flexDirection: 'row' }}>
                <Entypo name="back-in-time" size={12} color="black" />
                <Text>Buraco</Text>
              </View>
            </Callout>
          </>

        </Marker>
      </MapView>
    </View>
  )
}

const mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];


export default Map