import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '../store';

export const selectBooking = (state: RootState) => state.booking;

export const selectAcceptedRideRequest = createSelector(
  selectBooking,
  state => state.acceptedRideRequest,
);

export const selectDeclinedRideRequests = createSelector(
  selectBooking,
  state => state.declinedRideRequests,
);

export const selectPendingRideRequests = createSelector(
  selectBooking,
  state => state.pendingRideRequests,
);
