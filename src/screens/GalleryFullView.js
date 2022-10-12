import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const GalleryFullView = (props) => {
  return (
    <View>
      {/* <ImageBackground source={props.route.params.url} style={{height: Height, width: Width}} /> */}
      <ImageBackground style={{height: Height, width: Width}} />
    </View>
  )
}

export default GalleryFullView