import * as Location from 'expo-location';

import { LocationPermissionError } from './location.errors';
import type { Coordinates } from './location.types';

export const getCurrentCoordinates = async (): Promise<Coordinates> => {
  const permission = await Location.requestForegroundPermissionsAsync();

  if (permission.status !== Location.PermissionStatus.GRANTED) {
    throw new LocationPermissionError();
  }

  const position = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
  });

  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
};
