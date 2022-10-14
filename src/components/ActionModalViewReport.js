import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

import { Ionicons } from "@expo/vector-icons";

export function ActionModalViewReport({
  handleClose,
  handleNavigation,
  address,
}) {
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
        {/* <View style={{}}>
                </View> */}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 25,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius: 100,
              width: 100, 
              height: 100,
            }}
          >
            <Image
              source={require("../assets/markers/buraco-na-rua.jpg")}
              style={{ width: 100, height: 100, resizeMode: "cover", borderRadius: 100 }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 10,
              paddingRight: 80,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                fontFamily: "Inter-Bold",
                fontWeight: "700",
                paddingBottom: 5,
              }}
            >
              Buraco na rua
            </Text>

            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                fontFamily: "Inter-Light",
                fontWeight: "700",
                paddingVertical: 5,
                maxWidth:'90%',
                lineHeight:20
              }}
            >{`${address.street}, ${address.sublocality} - ${address.area}/${address.region}`}</Text>
            <View style={{ flexDirection: "row", paddingVertical: 3 }}>
              <Text>📅</Text>
              <Text style={{ paddingLeft: 5, fontSize: 14 }}>
                Relatado há 7 dias
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>👍</Text>
              <Text style={{ paddingLeft: 5, fontSize: 14 }}>
                20 Pessoas confirmaram
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: '10%'}}>
          <CustomButton
            label={"Visualizar Relato"}
            onPress={handleNavigation}
          />
          
        </View> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <View style={{ backgroundColor: 'rgba(83, 232, 139, 0.6)', borderRadius: 100, marginBottom: 12, marginTop: 2, paddingVertical: 5, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 14, color: 'black', fontFamily: 'Inter-Medium' }}>Pavimentação</Text>
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
                    <Text style={{ fontSize: 24, color: 'black', fontFamily: 'Inter-Black', marginTop: 10}}>
                        Buraco na rua
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
                lineHeight:20
              }}
            >{`${address.street}, ${address.sublocality} - ${address.area}/${address.region}`}</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        <Image source={require('../assets/images/examples/buraco-na-rua.jpg')} style={{ width: '100%', height: 200, borderRadius: 10, marginTop: 10 }} />
                    </View>
                    <View style={{paddingTop: '10%'}}>
          <CustomButton
            label={"Visualizar Resumo"}
            onPress={handleNavigation}
          />
          
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}
