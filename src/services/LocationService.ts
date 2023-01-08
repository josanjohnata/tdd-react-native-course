import GetLocation from 'react-native-get-location';

export class LocationService {
  static async getCurrentPosition() {
    return GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then(({longitude, latitude}) => ({longitude, latitude}));
  }
}
