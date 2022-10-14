import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import Fotolib from "../assets/icons/Fotolib";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import Camera from "../assets/icons/Camera";

const SelectPictureScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around" }}>
      <View>
        <View
          style={{
            backgroundColor: "#53E88B",
            width: "15%",
            padding: 15,
            marginLeft: 20,
            marginVertical: 10,
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
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 28, fontFamily: "Inter-Bold" }}>
            Selecine ou capture novas fotos
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Inter-Regular",
              paddingRight: "10%",
              paddingVertical: 10,
            }}
          >
            Recomendamos que as fotos tenham foco no problema, com todos os
            ângulos possíveis.
          </Text>
        </View>
        <View style={{ padding: 14 }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: 30,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Fotolib />

              
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  fontFamily: "Inter-Bold",
                  marginTop: 15,
                }}
              >
                Biblioteca de Fotos
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: 30,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Camera />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  fontFamily: "Inter-Bold",
                  marginTop: 15,
                }}
              >
                Camera
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0, padding: 15 }}>
        <CustomButton label={"Continuar"} />
      </View>
    </SafeAreaView>
  );
};

export default SelectPictureScreen;
