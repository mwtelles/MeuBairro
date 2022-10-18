import { View, Dimensions, Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window');

const FlatListHorizontal = ({ data }) => {
    // console.log('entrei aqui', data);
    return (
        <FlatList
            data={data}
            keyExtractor={item => String(item.url)}
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToOffsets={[...Array(data.length)].map(
                (x, i) => i * (width * 0.45 - 40) + (i - 1) * 40,
            )}
            snapToAlignment={'start'}
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            renderItem={({ item, index }) =>
                <View
                key={index}
                    style={{
                        backgroundColor:'gray',
                        height: width / 2.6,
                        width: width * 0.45 - 10,
                        marginHorizontal: 10,
                        borderRadius: 12,
                        marginLeft: 0
                    }}
                >
                    <Image source={{uri: item.url}} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10 }} />
                </View>}
        />
    )
}

export default FlatListHorizontal