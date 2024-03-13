export interface RideRequestClientDTO {
  name: string;
  phone_number: string;
}

export interface LocationDTO {
  latitude: number;
  longitude: number;
}

export interface RideRequestDTO {
  ride_request_id: number;
  pickup_location: LocationDTO;
  dropoff_location: string;
  ride_request_client_info: RideRequestClientDTO;
}

export const rideRequestData = [
  {
    ride_request_id: 100001,
    pickup_location: {
      latitude: 14.6504882,
      longitude: 121.0726461,
    },
    dropoff_location: 'Pamantasan ng Lungsod ng Maynila, Philippines',
    ride_request_client_info: {
      name: 'John Doe',
      phone_number: '+639 12345 6789',
    },
  },
  {
    ride_request_id: 100002,
    pickup_location: {
      latitude: 14.6395704,
      longitude: 121.0739645,
    },
    dropoff_location: 'Bonifacio Global City, Philippines',
    ride_request_client_info: {
      name: 'John Smith',
      phone_number: '+639 12345 6788',
    },
  },
  {
    ride_request_id: 100003,
    pickup_location: {
      latitude: 14.6287313,
      longitude: 121.0644996,
    },
    dropoff_location: 'Ayala, Makati, Philippines',
    ride_request_client_info: {
      name: 'Stephen Curry',
      phone_number: '+639 12345 6787',
    },
  },
] satisfies Array<RideRequestDTO>;
