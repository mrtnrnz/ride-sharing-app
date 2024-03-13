import {configureStore} from '@reduxjs/toolkit';

import {
  actions as bookingActions,
  name as bookingName,
  reducer as bookingReducer,
} from './slice/bookingSlice';

import {
  selectAcceptedRideRequest,
  selectDeclinedRideRequests,
  selectPendingRideRequests,
} from './selector/bookingSelector';

export const store = configureStore({
  reducer: {
    [bookingName]: bookingReducer,
  },
});

export const selectors = {
  [bookingName]: {
    selectAcceptedRideRequest,
    selectDeclinedRideRequests,
    selectPendingRideRequests,
  },
};

export const actions = {
  [bookingName]: bookingActions,
};

export type RootState = ReturnType<typeof store.getState>;
