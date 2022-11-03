import { View, Dimensions, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MapView, { Callout } from "react-native-maps";

import * as Location from "expo-location";

import { Marker } from "react-native-maps";
import CustomCallout from "./CustomCallout";

let firstLocation = {};

const reportIcon = {
  "buraco": require("../assets/markers/buraco.png"),
  "esgoto": require("../assets/markers/esgoto.png"),
  "luminaria": require("../assets/markers/luz.png"),
}

const { width, height } = Dimensions.get("screen");

const Map = ({ userLocation, modalReportView, notifications }) => {

  const mapRef = useRef();
  const [region, setRegion] = useState(null);

  function openModalReportView(data) {
    if (data) {
      modalReportView(data);
    }
  }

  useEffect(() => {
    getLocationPermission();
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

  function getUserLocation(position) {
    const { latitude, longitude } = position.nativeEvent.coordinate;
    if (position) {
      if (latitude !== firstLocation.latitude) {
        setRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        userLocation({ latitude, longitude });
        mapRef.current.animateToRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }, 1000);
      };
    }
    firstLocation = {latitude, longitude};
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
        style={{
          width: width,
          height: height,
        }}
        ref={mapRef}
        mapType="standard"
        showsMyLocationButton={false}
        minZoomLevel={15}
        maxZoomLevel={20}
        rotateEnabled={false}
        region={region}
        showsUserLocation={true}
        onUserLocationChange={getUserLocation}
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
                  notification.id
                ])
              }
            >
              <>
                <View>
                  <Image
                    source={reportIcon[notification.type.toLowerCase()]}
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
