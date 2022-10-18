import { View, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MapView, { Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { getAllNotifications } from "../services/api";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import * as Location from "expo-location";

import { Circle, Marker } from "react-native-maps";
import { ActionModalViewReport } from "./ActionModalViewReport";
import CustomCallout from "./CustomCallout";

const { width, height } = Dimensions.get("screen");

const Map = ({ userLocation, modalReportView, notifications }) => {
  const [userFirstLocation, setUserFirstLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);


  const [region, setRegion] = useState(null);

  const [pin, setPin] = useState({
    latitude: -22.4070467,
    longitude: -43.66119,
  });

  // const mapRef = useRef(null);

  function openModalReportView(data) {
    if (data) {
      modalReportView(data);
    }
  }

  useEffect(() => {
    getLocationPermission();
    getUserLocation();
  }, []);

  function getLocationPermission() {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("A Permissão para acessar a localização foi negada!");
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
          });
          userLocation(location);
          // console.log('location', location)
          // mapRef.current.animateToRegion(location, 3 * 1000);
        })();
      }
    }
  }

  return (
    <View
      style={{
        flex: 1,
        zIndex: 1,
        marginTop: "-18%",
      }}
    >
      <MapView
        // ref={mapRef}
        style={{
          width: width,
          height: height,
        }}
        mapType="standard"
        showsMyLocationButton={false}
        minZoomLevel={15}
        maxZoomLevel={20}
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
        // provider={PROVIDER_GOOGLE}
      >
        {notifications.map((notification, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: notification.latitude,
                longitude: notification.longitude,
              }}
              onPress={(data) =>
                openModalReportView([
                  notification.latitude,
                  notification.longitude,
                ])
              }
            >
              <>
                <View>
                  <Image
                    source={require("../assets/markers/pin-example.png")}
                    style={{ width: 55, height: 55 }}
                  />
                </View>

                <Callout tooltip={true}>
                  <CustomCallout />
                </Callout>
              </>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const mapStyle = [
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.government",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        // "color": "#dedede"
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        // "color": "#ffffff"
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
        // "color": "#53E88B"
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

export default Map;
