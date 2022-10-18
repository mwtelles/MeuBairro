import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import FlatListHorizontal from "../components/FlatListHorizontal";
import CustomButton from "../components/CustomButton";

import { LinearGradient } from "expo-linear-gradient";

import { useNavigation, useRoute } from "@react-navigation/native";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebase";
import { createReport } from "../services/api";

const ConfirmReportScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [isLoading, setIsLoading] = React.useState(false);
  const [storageImages, setStorageImages] = React.useState([]);

  const { data } = route.params;

  // const data = [
  //     { url: require("../assets/images/examples/buraco-na-rua.jpg") },
  //     { url: require("../assets/images/examples/buraco-2.jpeg") },
  //     { url: require("../assets/images/examples/buraco-3.jpeg") },
  //   ];

  async function uploadImageDatabase() {
    setIsLoading(true);
    // data.images.forEach(async (img) => {
    //   const blob = await new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onload = function () {
    //       resolve(xhr.response);
    //     };
    //     xhr.onerror = function () {
    //       reject(new TypeError("Network request failed"));
    //     };
    //     xhr.responseType = "blob";
    //     xhr.open("GET", img.url, true);
    //     xhr.send(null);
    //   });

    //   const storageRef = ref(storage, `images/notifications/${blob["_data"].blobId}`);

    //   const upload = uploadBytesResumable(storageRef, blob);
    //   upload.on("state_changed", (snapshot) => {
    //     console.log(
    //       "passei por aqui",
    //       snapshot.bytesTransferred,
    //       snapshot.totalBytes
    //     );
    //   }, (error) => {
    //     console.log(error);
    //   }, () => {
    //     getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
    //       setStorageImages(...images, downloadURL);
    //     });
    //   }
    //   );

    // });
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

      const storageRef = ref(
        storage,
        `images/notifications/${blob["_data"].blobId}`
      );

      const upload = uploadBytesResumable(storageRef, blob);
      upload.on(
        "state_changed",
        (snapshot) => {
          console.log(
            "passei por aqui",
            snapshot.bytesTransferred,
            snapshot.totalBytes
          );
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
            img.push(downloadURL);
          });
        }
      );
    }
    setTimeout(() => {
      setStorageImages(img);
    }, 10000);
  }

  const handleCreateReport = async () => {
    try {
      await uploadImageDatabase();
      setTimeout(() => {
        sendReport();
      }, 25000);
    } catch (e) {
      console.log(e);
    }
  };

  const sendReport = useCallback(() => {
    console.log("entrei aqui sendReport");
    (async () => {
      if (storageImages.length >= 2) {
        await createReport({ notification: data, images: storageImages });
        setIsLoading(false);
        navigation.navigate("Home");
      }
    })();
  }, [storageImages]);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <LinearGradient
          colors={["#53E88B", "#15BE77", "#15BE77"]}
          style={{ paddingVertical: "20%" }}
        >
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
          
        </LinearGradient>
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
          <CustomButton
            label={
              isLoading ? <ActivityIndicator size={"large"} /> : "Criar Relato"
            }
            onPress={handleCreateReport}
          />
        </View>
      </View>
    </View>
  );
};

export default ConfirmReportScreen;
