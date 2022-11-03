import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'

const GalleryFullView = (props) => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <View style={{ justifyContent: "flex-end", flexDirection:'row', paddingHorizontal:'5%', paddingBottom:'10%'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: props.route.params.url}}
        style={{ height: Height / 1.4, width: Width}}
      />
    </View>
  );
};

export default GalleryFullView;
