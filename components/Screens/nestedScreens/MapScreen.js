import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Text, View } from 'react-native';
import { styles } from '../../../Styled';

const MapScreen = ({ route }) => {
  const coordinate = route.params.location;
  const title = route.params.postData.place;

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
