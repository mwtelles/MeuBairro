import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { getNotificationsById, api } from "../services/api";
import FlatListHorizontal from "./FlatListHorizontal";

export function ActionModalViewReport({
  handleClose,
  handleNavigation,
  data,
}) {

  const [address, setAddress] = useState({});
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async () => {
      try {
        const getAddress = await api.get("/ReverseGeocode", {
          params: { location: `${data.location.latitude}, ${data.location.longitude}` },
        });
        const dataAddress = getAddress.data.results;
        let newAddress = dataAddress.find(
          (item) => item.location_type === "centroid" && item.type === "route"
        );
        setAddress(newAddress);
        const getNotification = await getNotificationsById(data.id)
        setReport(getNotification)
        setLoading(false)

      } catch (err) {
        console.log(err);
      }
    })();
  }, [data])

  return (
    <SafeAreaView
      style={{ flex: 1, position: "absolute", bottom: "-15%", width: "100%" }}
    >
      <TouchableOpacity
        style={{ flex: 1, paddingVertical: "100%" }}
        onPress={handleClose}
      ></TouchableOpacity>

      <View
        style={{
          flex: 0,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: "white",
          borderRadius: 8,
          padding: 18,
          paddingBottom: 0,
          shadowColor: "rgba(0,0,0,0.2)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          elevation: 5,
          shadowOpacity: 0.28,
          shadowRadius: 4,
        }}
      >
        {!loading ? (
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <View style={{ backgroundColor: 'rgba(83, 232, 139, 0.6)', borderRadius: 100, marginBottom: 12, marginTop: 2, paddingVertical: 5, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 14, color: 'black', fontFamily: 'Inter-Medium' }}>{report.notification.type}</Text>
              </View>
              <View style={{}}>
                <View style={{ flexDirection: 'row', padding: 5, borderRadius: 100 }}>
                  <Image source={require('../assets/images/examples/1.jpg')} style={{ width: 30, height: 30, borderRadius: 100, borderWidth: 1, borderColor: 'white', zIndex: 3 }} />
                  <Image source={require('../assets/images/examples/2.jpg')} style={{ width: 30, height: 30, borderRadius: 100, marginLeft: -10, borderWidth: 1, borderColor: 'white', zIndex: 2 }} />
                  <Image source={require('../assets/images/examples/3.png')} style={{ width: 30, height: 30, borderRadius: 100, marginLeft: -12, borderWidth: 1, borderColor: 'white', zIndex: 1 }} />
                  <View>
                    <Text style={{ fontFamily: 'Inter-Bold', fontSize: 10, padding: 2, borderRadius: 50, marginLeft: -16, marginTop: -12, zIndex: 4 }}>+10</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 24, color: 'black', fontFamily: 'Inter-Black', marginTop: 10 }}>
                {report.notification.title}
              </Text>
              <Text style={{ fontSize: 14, color: 'gray', fontFamily: 'Inter-Light', marginTop: 3, marginBottom: 10 }}>Publicado há 7 horas</Text>

              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 14,
                      fontFamily: "Inter-Medium",
                      paddingVertical: 5,
                      lineHeight: 20
                    }}
                  >{`${address.street}, ${address.sublocality} - ${address.area}/${address.region}`}</Text>
                </View>
              </View>
              <FlatListHorizontal data={report.images} />
              <View style={{ paddingTop: '10%' }}>
                <CustomButton
                  label={"Visualizar Notificação"}
                  onPress={handleNavigation}
                />

              </View>
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </SafeAreaView>
  );
}
