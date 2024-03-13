import {View, Text, StyleSheet} from 'react-native';
import type {FC, JSX} from 'react';
import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_DEFAULT, Marker} from 'react-native-maps';

import {DEVICE_DIMENSIONS} from '../../constants';

import useNavigation from '../../navigation/useNavigation';
import {rideRequestData} from './data';

import useRequestUserLocation from '../../hooks/useRequestUserLocation';

interface Location {
  lat: number;
  lon: number;
}

const HomeScreen: FC<{}> = (): JSX.Element => {
  const navigation = useNavigation();
  const {isLocationPermissionGranted} = useRequestUserLocation();

  const [currentLocation, setCurrentLocation] = useState<Location>({
    lat: 0,
    lon: 0,
  });

  useEffect(() => {
    if (isLocationPermissionGranted) {
      Geolocation.getCurrentPosition(
        position => {
          console.log('position: ', position);
          setCurrentLocation(prevState => ({
            ...prevState,
            lat: position?.coords?.latitude!,
            lon: position?.coords?.longitude!,
          }));
        },
        error => {
          console.log('error: ', error?.code);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [isLocationPermissionGranted]);

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      region={{
        latitude: currentLocation?.lat,
        longitude: currentLocation?.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{
        flex: 1,
      }}>
      {rideRequestData.map((item, idx) => (
        <Marker
          key={String(idx)}
          onPress={() =>
            navigation.navigate('DetailsScreen', {
              ride_request_info: {...item},
            })
          }
          coordinate={{
            ...item?.pickup_location,
          }}
          title={String(
            item?.ride_request_id +
              ' - ' +
              item?.ride_request_client_info?.name,
          )}
          description={`Drop off location: ${item?.dropoff_location}`}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: DEVICE_DIMENSIONS.height * 1,
  },
});

export default HomeScreen;
