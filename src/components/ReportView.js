import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';

const ReportView = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>
                        Pavimentação
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Entypo name="location-pin" size={24} color="black" />
                        <Text>
                            👍
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 16, color: 'black' }}>
                        Buraco na rua
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="location-pin" size={24} color="black" />
                        <Text>R.José O Cura 80-234, Centro</Text>
                    </View>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet.
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>
                            Imagens
                        </Text>
                        <Text>
                            Ver todos
                        </Text>
                    </View>
                    <Text>GALERIA</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, color: 'black' }}>
                        Comentários
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source={require('../assets/images/illustrations/user-profile.jpg')}
                            style={{ width: 100, height: 100, borderRadius: 0 }} />
                        <View>
                            <Text>Carlos Alberto</Text>
                            <Text>Mancusi</Text>
                            <Text>09 de Outubro</Text>
                            <Text>Estamos cientes do ocorrido...</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ReportView