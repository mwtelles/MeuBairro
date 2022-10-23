import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import React, { useCallback, useEffect } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import FlatListHorizontal from "../components/FlatListHorizontal";
import CustomButton from "../components/CustomButton";

import { useNavigation, useRoute } from '@react-navigation/native'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebase";
import { createReport } from "../services/api";

const ConfirmReportScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const [isLoading, setIsLoading] = React.useState(false);
  const [storageImages, setStorageImages] = React.useState([]);
  const [checkReport, setCheckReport] = React.useState(false);

  const { data } = route.params;

  async function uploadImageDatabase() {
    setIsLoading(true);
    let img = [];
    for (let i = 0; i < data.images.length; i++) {

      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", data.images[i].url, true);
        xhr.send(null);
      });

      const storageRef = ref(storage, `images/notifications/${blob["_data"].blobId}`);

      const upload = uploadBytesResumable(storageRef, blob);
      upload.on("state_changed", (snapshot) => {
        console.log(
          "passei por aqui",
          snapshot.bytesTransferred,
          snapshot.totalBytes
        );
      }, (error) => {
        console.log(error);
      }, () => {
        getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
          img.push(downloadURL);
        });
      }
      );
    }
    setTimeout(() => {
      setStorageImages(img);
    }, 10000)
  };

  const handleUploadReport = async () => {

    try {
      await uploadImageDatabase();
      setTimeout(() => {
        setCheckReport(true);
        setIsLoading(false);
        alert('Dados validados com sucesso!')
      }, 25000)
    } catch (e) {
      console.log(e);
    }

  };

  const sendReport = useCallback((data, storageImages) => {
    (async () => {
      if (storageImages.length >= 2) {
        await createReport({ notification: data, images: storageImages });
        navigation.navigate("Home");
        alert("Notificação criada com sucesso!");
      }
    })();
  }, []);


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
            padding: 15,
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
              {data.typeReport.name}
            </Text>
          </View>
        </View>
        <View style={{ padding: 15 }}>
          <Text
            style={{
              fontSize: 24,
              color: "black",
              fontFamily: "Inter-Black",
              marginBottom: 10,
            }}
          >
            {data.title}
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
              {`${data.street}, ${data.house} ${data.sublocality} - ${data.area}/${data.region}`}
            </Text>
          </View>
          <View style={{ maxWidth: "95%", paddingVertical: 15 }}>
            <Text
              style={{
                textAlign: "justify",
                fontFamily: "Roboto-Regular",
                fontSize: 13,
                lineHeight: 19,
              }}
            >
              {data.description}
            </Text>
          </View>
          <View>
            <FlatListHorizontal data={data.images} />
          </View>
          <View style={{ marginVertical: 20 }}>
            {!checkReport ? (
              <CustomButton
                label={
                  isLoading ? <ActivityIndicator size={"large"} /> : "Validar dados do relato"
                }
                onPress={handleUploadReport}
              />
            ) : (
              <CustomButton label={"Enviar Relato"} onPress={() => sendReport(data, storageImages)} />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmReportScreen;
