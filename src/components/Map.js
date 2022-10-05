import { View, Dimensions} from 'react-native'
import React, {useState, useEffect } from 'react'
import MapView from 'react-native-maps';

import { FontAwesome } from '@expo/vector-icons';

import * as Location from 'expo-location';

import { Circle, Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('screen')

const Map = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [region, setRegion] = useState(null);

  const [pin, setPin] = React.useState({
    latitude: 0,
    longitude: 0,
  });

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
        onMapReady={() => { }}
        mapType='standard'
        showsMyLocationButton={true}
        minZoomLevel={15}
        maxZoomLevel={19}
        rotateEnabled={false}
        region={region}
        showsUserLocation={true}
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
          coordinate={pin}
          title='teste'
          description='descricao'
          >
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