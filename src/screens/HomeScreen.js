import React, { useContext, useState, useCallback, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import Map from "../components/Map";
import { ActionModal } from "../components/ActionModal";
import { ActionModalViewReport } from "../components/ActionModalViewReport";
import ReportView from "../components/ReportView";
import { api, getAllNotifications } from "../services/api";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native';

export default function HomeScreen() {

  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const { height } = Dimensions.get("screen");
  const [location, setLocation] = useState([]);
  const [address, setAddress] = useState([]);
  const [geolocation, setGeolocation] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleButton, setVisibleButton] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [openRelate, setOpenRelate] = useState([]);
  const bottomSheetRef = useRef(null);

  const getUserLocation = useCallback((location) => {
    setLocation([location.latitude, location.longitude]);
  }, []);

  const getModalReportView = useCallback((openModalReportView) => {
    // console.log("openModalReportView", openModalReportView);
    setIsVisible(true);
    openNotificationModal(openModalReportView, true);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
    setTimeout(() => {
      setIsBottomSheetVisible(false);
    }, 500);
  }, []);

  const openNotificationModal = async (location, openRelate) => {
    try {
      const response = await api.get("/ReverseGeocode", {
        params: { location: `${location[0]}, ${location[1]}` },
      });
      const data = response.data.results;
      let address = data.find(
        (item) => item.location_type === "centroid" && item.type === "route"
      );
      if (!openRelate) {
        setVisibleModal(true);
        setAddress(address);
        setGeolocation({latitude: location[0], longitude: location[1]});
      } else {
        setOpenRelate({location: {latitude: location[0], longitude: location[1]}, id: location[2]});
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotifications();
  }, [isFocused])
  
  const getNotifications = async () => {
    const response = await getAllNotifications();
    setNotifications(response);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light" />
      <View
        style={{
          flexDirection: "row",
          zIndex: 2,
          justifyContent:'space-between'
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            backgroundColor: "rgba(231, 231, 231, 0.8)",
            borderRadius: 12,
            padding: 18,
            marginLeft: 15,
            top:50,
            bottom:0,
          }}
        >
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Modal em construção')}
          style={{
            backgroundColor: "rgba(83, 232, 139, 0.78)",
            borderRadius: 12,
            padding: 18,
            marginRight: 15,
            top:50,
            bottom:0,
          }}
        >
          <MaterialIcons name="filter-alt" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Map
        notifications={notifications}
        userLocation={getUserLocation}
        modalReportView={getModalReportView}
        style={{ zIndex: -1 }}
      />

      {!isBottomSheetVisible && (
        <View
          style={{
            flexDirection: "row-reverse",
            zIndex: 2,
            marginBottom: 35,
            maxWidth: "100%",
          }}
        >
          <TouchableOpacity
            visible={visibleButton}
            onPress={() => openNotificationModal(location, false)}
            style={{
              backgroundColor: "#53E88B",
              borderRadius: 12,
              padding: 18,
              marginRight: 15,
              marginBottom: 25,
            }}
          >
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
              handleNavigation={() => {
                navigation.navigate("Reportar", {data: {
                  address,
                  geolocation
                }});
                setVisibleModal(false);
              }}
            />
          </Modal>
          {isVisible && (
            <ActionModalViewReport
              data={openRelate}
              handleClose={() => {
                setIsVisible(false);
                setIsBottomSheetVisible(false);
                setOpenRelate([]);
              }}
              handleNavigation={() => {
                setIsVisible(false);
                navigation.navigate("FullReport", {data: openRelate});
              }}
            />
          )}
        </View>
      )}
    </View>
  );
}
