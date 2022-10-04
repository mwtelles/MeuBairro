import { View, Dimensions} from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('screen')

const Map = ({region, ...props}) => {

    return (
        <View style={{
            flex: 1, zIndex: 1,
            marginTop: '-23%'
        }}>
            <MapView
                style={{
                    width: width,
                    height: height,
                }}
                onMapReady={() => { }}
                mapType='standard'
                showsMyLocationButton={true}
                minZoomLevel={16}
                maxZoomLevel={18}
                rotateEnabled={false}
                region={region}
                showsUserLocation={true}
                loadingEnabled={true}

                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
        </View>
    )
}


export default Map