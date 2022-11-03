import { View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

import { useNavigation } from '@react-navigation/native';

const ImageGallery = ({ data }) => {

    const navigation = useNavigation();

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                {
                    data.map((images, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate('GalleryFullView', {
                                url: images.url
                            })}>
                                <Image source={{uri: images.url}} style={{
                                    height: Height / 5,
                                    width: Width / 2.5 - 6,
                                    borderRadius: 10,
                                    margin: 2
                                }} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default ImageGallery