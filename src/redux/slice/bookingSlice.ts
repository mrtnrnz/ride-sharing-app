import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {rideRequestData} from '../../screens/HomeScreen/data';

import type {RideRequestDTO} from '../../screens/HomeScreen/data';

export type BookingState = {
  acceptedRideRequest: RideRequestDTO | null;
  declinedRideRequests: Array<RideRequestDTO>;
  pendingRideRequests: Array<RideRequestDTO>;
};

export const BOOKING_NAME = 'booking';

const initialState: NonNullable<BookingState> = {
  acceptedRideRequest: null,
  declinedRideRequests: [],
  pendingRideRequests: rideRequestData,
};

export const bookingSlice = createSlice({
  name: BOOKING_NAME,
  initialState,
  reducers: {
    setAcceptedRideRequest: (
      state,
      action: PayloadAction<BookingState['acceptedRideRequest']>,
    ) => {
      state.acceptedRideRequest = action.payload;
    },
    setDeclinedRideRequests: (
      state,
      action: PayloadAction<BookingState['declinedRideRequests']>,
    ) => {
      state.declinedRideRequests = action.payload;
    },
    setPendingRideRequests: (
      state,
      action: PayloadAction<BookingState['pendingRideRequests']>,
    ) => {
      state.pendingRideRequests = action.payload;
    },
  },
});

export const {reducer, actions, name} = bookingSlice;
