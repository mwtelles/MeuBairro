import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from '../context/AuthContext';

const RankingScreen = ({ navigation }) => {

  const { userInfo } = useContext(AuthContext);


  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#53E88B', '#15BE77', '#15BE77']}
          style={{ paddingVertical: 35 }}>
          <View style={{ backgroundColor: '#53E88B', width: '15%', padding: 14, marginLeft: 20, borderRadius: 10, opacity: 0.8 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/images/illustrations/user-profile.jpg')}
              style={{ width: 100, height: 100, borderRadius: 100 }} />
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 5 }}>
              {userInfo.result.user.name}
            </Text>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
              {userInfo.result.user.cpf}
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View style={{ paddingVertical: 15, paddingHorizontal:15 ,justifyContent: 'space-between', alignItems: 'center', borderColor: 'rgba(0,0,0,0.11)', borderTopWidth: 1, borderBottomWidth: 1, flexDirection: 'row' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 30 }}>1</Text>
          <Text style={{ fontSize: 10 }}>posição</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/images/illustrations/user-profile.jpg')} style={{ width: 55, height: 55, borderRadius: 8 }} />
            <View style={{ flexDirection: 'column', paddingLeft: '5%', alignItems:'flex-start'}}>
              <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', paddingTop: 5 }}>
                {userInfo.result.user.name}
              </Text>
              <Text style={{ color: 'black', fontSize: 14, fontWeight: '300'}}>
                Bairro
              </Text>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>10</Text>
          <Text style={{ fontSize: 10 }}>Interações</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default RankingScreen