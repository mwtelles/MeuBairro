import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from '../context/AuthContext';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {

  const { userInfo } = useContext(AuthContext);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
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
                    source={require('../assets/images/illustrations/user-profile.jpg')}
                    style={{ width: 100, height: 100, borderRadius: 100 }} />
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
      <View style={{ marginTop: '10%' }}>
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
});


export default ProfileScreen