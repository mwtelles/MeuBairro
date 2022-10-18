import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../context/AuthContext";

const RankingScreen = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#53E88B", "#15BE77", "#15BE77"]}
          style={{ paddingVertical: "10%" }}
        >
          <View
            style={{
              backgroundColor: "#53E88B",
              width: "15%",
              padding: 14,
              marginLeft: 20,
              borderRadius: 10,
              opacity: 0.8,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../assets/images/illustrations/user-profile.jpg")}
              style={{ width: 140, height: 140, borderRadius: 100 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                paddingTop: 10,
                fontFamily: "Inter-Bold",
              }}
            >
              {userInfo.result.user.name}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                paddingTop: 5,
              }}
            >
              Morro da Vaca
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 15,
          alignItems: "center",
          borderColor: "rgba(0,0,0,0.11)",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingRight: "15%",
            }}
          >
            <Text style={{ fontSize: 30, fontFamily: "Inter-SemiBold" }}>1</Text>
          </View>
          
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              paddingRight: "40%",
            }}
          >
            <View style={{ flexDirection: "row", borderColor: "gray" }}>
              <View style={{ flexDirection: "column", paddingLeft: 5 }}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontFamily: "Inter-Bold",
                    paddingTop: 5,
                  }}
                >
                  {userInfo.result.user.name}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    fontFamily: "Inter-Regular",
                    paddingLeft: 2
                  }}
                >
                  Morro da Vaca
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontFamily: "Inter-SemiBold" }}>1000</Text>
          <Text style={{ fontSize: 12, fontFamily: "Inter-SemiBold" }}>Pontos</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RankingScreen;
