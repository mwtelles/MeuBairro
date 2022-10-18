import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import FlatListHorizontal from "../components/FlatListHorizontal";
import CustomButton from "../components/CustomButton";

import { useNavigation } from '@react-navigation/native'

const ConfirmReportScreen = () => {

    const navigation = useNavigation();

    const data = [
        { url: require("../assets/images/examples/buraco-na-rua.jpg") },
        { url: require("../assets/images/examples/buraco-2.jpeg") },
        { url: require("../assets/images/examples/buraco-3.jpeg") },
      ];

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            padding:15,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(83, 232, 139, 0.6)",
              borderRadius: 100,
              marginTop: 2,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontFamily: "Inter-Medium",
              }}
            >
              Pavimentação
            </Text>
          </View>
        </View>
        <View style={{padding:15}}>
          <Text
            style={{
              fontSize: 24,
              color: "black",
              fontFamily: "Inter-Black",
              marginBottom: 10,
            }}
          >
            Buraco na rua
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 14,
                color: "gray",
                fontFamily: "Inter-Medium",
                marginTop: 10,
              }}
            >
              R.José O Cura 80-234, Centro
            </Text>
          </View>
          <View style={{ maxWidth: "95%", paddingVertical:15 }}>
            <Text
              style={{
                textAlign: "justify",
                fontFamily: "Roboto-Regular",
                fontSize: 13,
                lineHeight: 19,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
              consequat felis vehicula class ultricies mollis dictumst, aenean
              non a in donec nulla. Phasellus ante pellentesque erat cum risus
              consequat imperdiet.
            </Text>
          </View>
          <View>
          <FlatListHorizontal data={data} />
          </View>
          <View style={{marginVertical:20}}>
            <CustomButton label={'Criar Relato'} onPress={() => {}}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmReportScreen;
