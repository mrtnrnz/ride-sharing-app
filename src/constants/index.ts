import {Dimensions} from 'react-native';

export const DEVICE_DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  fontScale: Dimensions.get('window').fontScale,
  scale: Dimensions.get('window').scale,
};
