import { View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import images from '../images'

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

import { useNavigation } from '@react-navigation/native';

const ImageGallery = (props) => {

    const navigation = useNavigation();

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{display:'flex', flexDirection:'row', flexWrap: 'nowrap'}}>
                {
                    images.map((Images, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('GalleryFullView', {
                            url:Images.url
                            })}> 
                            <Image source={Images.url} style={{
                                height: Height / 5,
                                width: Width / 2.5 - 6,
                                borderRadius: 10,
                                margin: 2
                            }} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default ImageGallery