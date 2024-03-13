import {View, StyleSheet} from 'react-native';
import type {FC, JSX} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Card from '../../components/Card';

import {actions, selectors} from '../../redux/store';
import type {RideRequestDTO} from '../HomeScreen/data';

import {DEVICE_DIMENSIONS} from '../../constants';

type DetailsScreenProps = {
  route?: {
    params?: {
      ride_request_info?: RideRequestDTO;
    };
  };
};

const DetailsScreen: FC<DetailsScreenProps> = ({route}): JSX.Element => {
  const dispatch = useDispatch();

  const selectAcceptedRideRequest = useSelector(
    selectors.booking.selectAcceptedRideRequest,
  );
  const selectDeclinedRideRequests = useSelector(
    selectors.booking.selectDeclinedRideRequests,
  );

  const onAcceptRideRequest = () =>
    dispatch(
      actions.booking.setAcceptedRideRequest({
        ...route?.params?.ride_request_info!,
      }),
    );

  const onDeclineRideRequest = () =>
    dispatch(
      actions.booking.setDeclinedRideRequests([
        ...selectDeclinedRideRequests,
        {
          ...route?.params?.ride_request_info!,
        },
      ]),
    );

  return (
    <View style={styles.container}>
      <Card
        bookingId={route?.params?.ride_request_info?.ride_request_id!}
        status={
          selectAcceptedRideRequest?.ride_request_id ===
          route?.params?.ride_request_info?.ride_request_id
            ? 'accepted'
            : selectDeclinedRideRequests?.find(
                item =>
                  item?.ride_request_id ===
                  route?.params?.ride_request_info?.ride_request_id,
              )
            ? 'declined'
            : 'pending'
        }
        clientName={
          route?.params?.ride_request_info?.ride_request_client_info?.name!
        }
        contactNumber={
          route?.params?.ride_request_info?.ride_request_client_info
            ?.phone_number ?? ''
        }
        btnAcceptOnPress={onAcceptRideRequest}
        btnDeclineOnPress={onDeclineRideRequest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: DEVICE_DIMENSIONS.height * 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
