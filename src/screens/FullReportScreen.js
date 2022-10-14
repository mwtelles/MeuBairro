import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import FlatListHorizontal from '../components/FlatListHorizontal';

import CustomButton from '../components/CustomButton';
import ImageGallery from '../components/ImageGallery';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

const FullReportScreen = ({ navigation }) => {

    return (
        <ScrollView>
            <View>
                <LinearGradient
                    colors={['#53E88B', '#15BE77', '#15BE77']}
                    style={{ paddingVertical: 50 }}>
                    <View style={{ backgroundColor: '#53E88B', width: '15%', padding: 14, marginLeft: 20, borderRadius: 10, opacity: 0.8 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name="chevron-left" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20}}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <View style={{ backgroundColor: 'rgba(83, 232, 139, 0.6)', borderRadius: 100, marginBottom: 12, marginTop: 2, paddingVertical: 5, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 14, color: 'black', fontFamily: 'Inter-Medium' }}>Pavimentação</Text>
                    </View>
                    <View style={{}}>
                        <View style={{ flexDirection: 'row', padding: 5, borderRadius: 100 }}>
                            <Image source={require('../assets/images/examples/1.jpg')} style={{ width: 30, height: 30, borderRadius: 100, borderWidth: 1, borderColor: 'white', zIndex: 3 }} />
                            <Image source={require('../assets/images/examples/2.jpg')} style={{ width: 30, height: 30, borderRadius: 100, marginLeft: -10, borderWidth: 1, borderColor: 'white', zIndex: 2 }} />
                            <Image source={require('../assets/images/examples/3.png')} style={{ width: 30, height: 30, borderRadius: 100, marginLeft: -12, borderWidth: 1, borderColor: 'white', zIndex: 1 }} />
                            <View>
                                <Text style={{ fontFamily: 'Inter-Bold', fontSize: 10, padding: 2, borderRadius: 50, marginLeft: -16, marginTop: -12, zIndex: 4 }}>+10</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 24, color: 'black', fontFamily: 'Inter-Black', marginTop: 10, marginBottom: 10 }}>
                        Buraco na rua
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                        <Text style={{ fontSize: 14, color: 'gray', fontFamily: 'Inter-Medium'}}>R.José O Cura 80-234, Centro</Text>
                        <Text style={{ fontSize: 14, color: 'gray', fontFamily: 'Inter-Light', marginTop: 10, marginBottom: 10 }}>Publicado há 7 horas</Text>
                        </View>
                    </View>
                    <View style={{ maxWidth: '95%' }}>
                        <Text style={{ textAlign: 'justify', fontFamily: 'Roboto-Regular', fontSize: 13, lineHeight: 19 }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet.
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, color: 'black', fontFamily: 'Inter-Bold', marginTop: 10, marginBottom: 10 }}>
                            Imagens
                        </Text>
                    </View>
                    <View>
                        <ImageGallery />
                    </View>
                    <View style={{marginTop: 50}}>
                        <CustomButton label={'Gerar Relatorio'}/>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default FullReportScreen