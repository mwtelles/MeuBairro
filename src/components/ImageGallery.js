import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import images from '../images'

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const ImageGallery = (props) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{display:'flex', flexDirection:'row', flexWrap: 'nowrap'}}>
                {
                    Images.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() => props.navigation.navigate('GalleryFullView', {
                            url:image.url
                            })}>
                            <Image source={image.url} style={{
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