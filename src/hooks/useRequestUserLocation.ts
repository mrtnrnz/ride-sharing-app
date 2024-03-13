import {useCallback, useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import type {Permission} from 'react-native-permissions';
import {
  PERMISSIONS,
  RESULTS,
  check,
  openSettings,
  request,
} from 'react-native-permissions';

type UseRequestUserLocation = () => {
  isLocationPermissionGranted: boolean;
};

export default function useRequestUserLocation(): ReturnType<UseRequestUserLocation> {
  const [isLocationPermissionGranted, setLocationPermissionGranted] =
    useState(false);

  const openSettingsAlertCallback = () => {
    Alert.alert(
      'Location Permission',
      'Please enable your location for better user experience.',
      [
        {
          text: 'OK',
          onPress() {
            openSettings();
          },
        },
      ],
    );
  };

  const handleCheckRequestLocation = useCallback(
    (locationPermission: Permission) => {
      check(locationPermission).then(result => {
        if (result === RESULTS.DENIED) {
          request(locationPermission).then(newResult => {
            if (newResult === RESULTS.GRANTED) {
              setLocationPermissionGranted(true);
            } else {
              setLocationPermissionGranted(false);
              openSettingsAlertCallback();
            }
          });
        }
        if (result === RESULTS.BLOCKED) {
          setLocationPermissionGranted(false);
          openSettingsAlertCallback();
        }
        if (result === RESULTS.GRANTED) {
          setLocationPermissionGranted(true);
        }
      });
    },
    [],
  );

  useEffect(() => {
    handleCheckRequestLocation(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
  }, [handleCheckRequestLocation]);

  return {
    isLocationPermissionGranted,
  };
}
