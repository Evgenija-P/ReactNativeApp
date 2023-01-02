import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

const MapScreen = ({ route }) => {
  console.log(route.params);
  const coordinate = route.params.photoLocation;
  const title = route.params.postPlase;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: coordinate.latitude,
          longitude: coordinate.latitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: coordinate.latitude,
            longitude: coordinate.latitude,
          }}
          title={title}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
