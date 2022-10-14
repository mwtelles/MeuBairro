import React, { useContext, useState, useCallback, useRef } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import Map from "../components/Map";
import { ActionModal } from "../components/ActionModal";
import { ActionModalViewReport } from "../components/ActionModalViewReport";
import ReportView from "../components/ReportView";
import { api } from "../services/api";

import BottomSheet from "@gorhom/bottom-sheet";

export default function HomeScreen({ navigation }) {
  const { width, height } = Dimensions.get("screen");

  const { userInfo } = useContext(AuthContext);

  const [location, setLocation] = useState([]);
  const [address, setAddress] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleButton, setVisibleButton] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const [openRelate, setOpenRelate] = useState([]);

  const bottomSheetRef = useRef(null);

  const getUserLocation = useCallback((location) => {
    setLocation([location.coords.latitude, location.coords.longitude]);
  }, []);

  const getModalReportView = useCallback((openModalReportView) => {
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
      } else {
        setOpenRelate(address);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light" />
      <View
        style={{
          flexDirection: "row",
          zIndex: 2,
          maxWidth: "20%",
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
      </View>
      <Map
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
                navigation.navigate("Relatar Problema");
                setVisibleModal(false);
              }}
            />
          </Modal>
          {isVisible && (
            <ActionModalViewReport
              address={openRelate}
              handleClose={() => {
                setIsVisible(false);
                setIsBottomSheetVisible(false);
              }}
              handleNavigation={() => {
                bottomSheetRef.current?.expand();
                setIsVisible(false);
                setIsBottomSheetVisible(true);
              }}
            />
          )}
        </View>
      )}
      {isBottomSheetVisible && (
        <View
          style={{
            flexDirection: "row-reverse",
            zIndex: 2,
            marginBottom: 35,
            maxWidth: "100%",
            height: "100%",
          }}
        >
          <TouchableOpacity
            style={{ height: "100%", width: "100%" }}
            onPress={() => handleClosePress()}
          ></TouchableOpacity>
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={[0.1, height - 280]}
            backgroundStyle={{ backgroundColor: "white" }}
            handleIndicatorStyle={{ backgroundColor: "#555" }}
          >
            <ReportView />
          </BottomSheet>
        </View>
      )}
    </View>
  );
}
