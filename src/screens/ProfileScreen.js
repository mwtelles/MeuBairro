import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../services/firebase";
import { updateUserImage } from "../services/api";

const ProfileScreen = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (userId) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", result.uri, true);
      xhr.send(null);
    });

    if (!result.cancelled) {
      setLoading(true);

      const storageRef = ref(storage, `images/${blob["_data"].blobId}`);

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
          getDownloadURL(upload.snapshot.ref).then(async (downloadURL) => {
            setAvatar(downloadURL);
            const data = await updateUserImage(userId, downloadURL);
            if (data.success) {
              setLoading(false);
              alert(data.result.message);
            }
          });
        }
      );
      // const upload = storageRef.put(result.uri)
    }
  };

  return (
    // <ScrollView style={{ height: '100%', zIndex:-1 }}>
    //   <View style={{ flex: 1, height: '100%', zIndex:0 }}>
    //     <LinearGradient colors={['#53E88B', '#15BE77', '#15BE77']} style={{ paddingVertical: 60 }}>
    // <View style={{ backgroundColor: '#53E88B', width: '15%', padding: 14, marginLeft: 20, borderRadius: 10, opacity: 0.8 }}>
    //   <TouchableOpacity onPress={() => navigation.goBack()}>
    //     <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
    //   </TouchableOpacity>
    // </View>
    //       <View style={{ justifyContent: 'center', alignItems: 'center'}}>
    //         <View style={[styles.card, styles.shadowProp]}>
    // <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    //   <View style={{ flexDirection: 'row' }}>
    //     {loading ? (
    //       <View style={{ backgroundColor:'rgba(0,0,0,0.08)', width:100, height:100, borderRadius:100, alignItems:'center', justifyContent:'center'}}>
    //         <ActivityIndicator size={'large'} />
    //       </View>
    //     ) : (
    //       <Image
    //         source={avatar ? { uri: avatar } : userInfo ? { uri: userInfo.result.user.photo_url } : require('../assets/images/illustrations/user-profile.jpg')}
    //         style={{ width: 100, height: 100, borderRadius: 100 }} />
    //     )}
    //     <TouchableOpacity style={styles.uploadButton} onPress={() => handleUpload(userInfo.result.user.id)}>
    //       <MaterialIcons name='file-upload' size={20} color="white" />
    //     </TouchableOpacity>
    //     <View style={{ flexDirection: 'column', paddingLeft: 10, paddingTop: 10 }}>
    //       <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Inter-Medium', fontWeight: '700' }}>{userInfo.result.user.name}</Text>
    //       <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Roboto-Regular', fontWeight: '100' }}>{userInfo.result.user.cpf}</Text>
    //     </View>
    //   </View>
    //   <View style={[styles.notificationCard]}>
    //     <TouchableOpacity onPress={() => { }}>
    //       <MaterialIcons name="notifications-none" size={28} color="#53E88B" />
    //     </TouchableOpacity>
    //   </View>
    // </View>
    //         </View>
    //       </View>
    //     </LinearGradient>
    //     <View style={{ marginTop: '10%' }}>
    //       <TouchableOpacity onPress={() => { }}>
    //         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    //           <View style={[styles.infoCard, styles.shadowProp]}>
    //             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    //               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                 <Image
    //                   source={require('../assets/images/illustrations/user-profile.jpg')}
    //                   style={{ width: 60, height: 60, borderRadius: 8 }} />
    //                 <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium', paddingLeft: 10 }}>Publicações</Text>
    //               </View>
    //               <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium' }}>4</Text>
    //             </View>
    //           </View>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => { }}>
    //         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    //           <View style={[styles.infoCard, styles.shadowProp]}>
    //             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    //               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                 <Image
    //                   source={require('../assets/images/illustrations/user-profile.jpg')}
    //                   style={{ width: 60, height: 60, borderRadius: 8 }} />
    //                 <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium', paddingLeft: 10 }}>Relatórios</Text>
    //               </View>
    //               <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium' }}>4</Text>
    //             </View>
    //           </View>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </ScrollView>
    <View
      style={{ backgroundColor: "green", flex: 1, flexDirection: "column" }}
    >
      <LinearGradient
        LinearGradient
        colors={["#15BE77", "#53E88B", "#53E88B"]}
        style={{ flex: 1, flexDirection: "column" }}
      >
        <View
          style={{
            flex: 1,
            maxHeight: "30%",
            zIndex: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#53E88B",
              width: "15%",
              padding: 14,
              marginLeft: 20,
              borderRadius: 10,
              opacity: 0.8,
              marginTop: "15%",
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
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              flex: 1,
              position: "absolute",
              top: "65%",
              width: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "90%",
                height: "100%",
                paddingBottom: 20,
                paddingTop: 20,
                borderRadius: 8,
                paddingHorizontal: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  {loading ? (
                    <View
                      style={{
                        backgroundColor: "rgba(0,0,0,0.08)",
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ActivityIndicator size={"large"} />
                    </View>
                  ) : (
                    <Image
                      source={
                        avatar
                          ? { uri: avatar }
                          : userInfo
                          ? { uri: userInfo.result.user.photo_url }
                          : require("../assets/images/illustrations/user-profile.jpg")
                      }
                      style={{ width: 100, height: 100, borderRadius: 100 }}
                    />
                  )}
                  <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={() => handleUpload(userInfo.result.user.id)}
                  >
                    <MaterialIcons name="file-upload" size={20} color="white" />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "column",
                      paddingLeft: 13,
                      paddingTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "#000000",
                        fontSize: 18,
                        fontFamily: "Inter-Bold",
                        fontWeight: "500",
                      }}
                    >
                      {userInfo.result.user.name}
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontSize: 12,
                        fontFamily: "Inter-Light",
                        fontWeight: "200",
                        paddingTop: 5,
                      }}
                    >
                      {userInfo.result.user.cpf}
                    </Text>
                  </View>
                </View>
                <View style={[styles.notificationCard]}>
                  <TouchableOpacity onPress={() => {}}>
                    <MaterialIcons
                      name="notifications-none"
                      size={28}
                      color="#53E88B"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: "#E3E3E3", flex: 1, zIndex: 0 }}>
          <View
            style={{
              justifyContent:'flex-start',
              alignContent:'center',
              alignItems:'baseline',
              flex: 1,
              marginVertical:'20%',
              paddingHorizontal: 20,
            }}
          >
            <Text>Teste</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "90%",
    padding: 20,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#52006A",
    zIndex: 5,
  },
  infoCard: {
    backgroundColor: "white",
    width: "90%",
    padding: 15,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#52006A",
    marginTop: 10,
    marginBottom: 10,
  },
  notificationCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    height: 50,
    elevation: 20,
    shadowColor: "#52006A",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  uploadButton: {
    backgroundColor: "#53E88B",
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "19%",
    bottom: -10,
  },
});

export default ProfileScreen;
