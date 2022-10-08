import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from '../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { storage } from '../services/firebase';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../services/firebase';
import { launchImageLibrary } from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: true,
  }
}

const ProfileScreen = ({ navigation }) => {

  const { userInfo } = useContext(AuthContext);

  const [avatar, setAvatar] = useState(null);


  const handleUpload = async () => {
    // const result = await launchImageLibrary(options);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', result.uri, true);
      xhr.send(null);
    });


    if (!result.cancelled) {
      setAvatar(result.uri);

      const storageRef = ref(storage, `images/${blob['_data'].blobId}`);

      const upload = uploadBytesResumable(storageRef, blob);
      upload.on('state_changed', (snapshot) => {
        console.log('passei por aqui', snapshot.bytesTransferred, snapshot.totalBytes);
      }, error => {
        console.log('cheguei aqui', error);
      }, () => {
        getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
          setAvatar(downloadURL);
        })
      });
      // const upload = storageRef.put(result.uri)
    }
  };

  return (
    <ScrollView style={{ height: '100%' }}>
      <View style={{ flex: 1, height: '100%' }}>
        <LinearGradient
          colors={['#53E88B', '#15BE77', '#15BE77']}
          style={{ paddingVertical: 60 }}
        >
          <View style={{ backgroundColor: '#53E88B', width: '15%', padding: 14, marginLeft: 20, borderRadius: 10, opacity: 0.8 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '-20%', marginTop: '10%', zIndex: 100 }}>
            <View style={[styles.card, styles.shadowProp]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={avatar ? {uri: avatar}  : require('../assets/images/illustrations/user-profile.jpg')}
                    style={{ width: 100, height: 100, borderRadius: 100 }} />
                  <TouchableOpacity style={styles.uploadButton} onPress={() => handleUpload()}>
                    <MaterialIcons name='camera' size={20} color="white" />
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'column', paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Inter-Medium', fontWeight: '700' }}>{userInfo.result.user.name}</Text>
                    <Text style={{ color: '#000000', fontSize: 15, fontFamily: 'Roboto-Regular', fontWeight: '100' }}>{userInfo.result.user.cpf}</Text>
                  </View>
                </View>
                <View style={[styles.notificationCard]}>
                  <TouchableOpacity onPress={() => { }}>
                    <MaterialIcons name="notifications-none" size={28} color="#53E88B" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={{ marginTop: '10%', height: '100%' }}>
        <TouchableOpacity onPress={() => { }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.infoCard, styles.shadowProp]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/images/illustrations/user-profile.jpg')}
                    style={{ width: 60, height: 60, borderRadius: 8 }} />
                  <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium', paddingLeft: 10 }}>Publicações</Text>
                </View>
                <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium' }}>4</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.infoCard, styles.shadowProp]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/images/illustrations/user-profile.jpg')}
                    style={{ width: 60, height: 60, borderRadius: 8 }} />
                  <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium', paddingLeft: 10 }}>Relatórios</Text>
                </View>
                <Text style={{ color: '#000000', fontSize: 18, fontFamily: 'Roboto-Medium' }}>4</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '90%',
    padding: 20,
    borderRadius: 8,
    elevation: 20,
    shadowColor: '#52006A',
  },
  infoCard: {
    backgroundColor: 'white',
    width: '90%',
    padding: 15,
    borderRadius: 8,
    elevation: 20,
    shadowColor: '#52006A',
    marginTop: 10,
    marginBottom: 10
  },
  notificationCard: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    height: 50,
    elevation: 20,
    shadowColor: '#52006A',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  uploadButton: {
    backgroundColor: '#53E88B',
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 35,
    bottom: -10,

  }
});


export default ProfileScreen