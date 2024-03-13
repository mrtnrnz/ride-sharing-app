import type {RideRequestDTO} from '../screens/HomeScreen/data';

export type RootStackParamList = {
  Dashboard: undefined;
  HomeScreen: undefined;
  DetailsScreen: {
    ride_request_info: RideRequestDTO;
  };
};
