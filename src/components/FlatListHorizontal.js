import { View, Text, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window');

const FlatListHorizontal = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={item => String(item)}
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToOffsets={[...Array(data.length)].map(
                (x, i) => i * (width * 0.45 - 40) + (i - 1) * 40,
            )}
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            renderItem={({ item }) =>
                <View
                    style={{
                        backgroundColor:'gray',
                        height: width / 2.6,
                        width: width * 0.45 - 10,
                        marginHorizontal: 10,
                        borderRadius: 8,
                        marginLeft: 0
                    }}
                >
                    <Image source={item} style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 10 }} />
                    {/* <Image source={require('../assets/images/examples/1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10 }} /> */}
                </View>}
        />
    )
}

export default FlatListHorizontal