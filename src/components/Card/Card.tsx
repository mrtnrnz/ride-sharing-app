import {View, Text, StyleSheet} from 'react-native';
import type {TouchableOpacityProps} from 'react-native';
import {useSelector} from 'react-redux';
import type {FC, JSX} from 'react';
import {DEVICE_DIMENSIONS} from '../../constants';

import Button from '../Button';

import {selectors} from '../../redux/store';

type CardProps = {
  bookingId: number;
  clientName: string;
  contactNumber: string;
  status: 'pending' | 'accepted' | 'declined';
  btnAcceptOnPress?: TouchableOpacityProps['onPress'];
  btnDeclineOnPress?: TouchableOpacityProps['onPress'];
};

const Card: FC<CardProps> = ({
  bookingId,
  clientName,
  contactNumber,
  status,
  btnAcceptOnPress,
  btnDeclineOnPress,
}): JSX.Element => {
  const acceptedRideRequest = useSelector(
    selectors.booking.selectAcceptedRideRequest,
  );
  const declinedRideRequests = useSelector(
    selectors.booking.selectDeclinedRideRequests,
  );

  return (
    <View style={styles.container}>
      <Text>Booking ID: {String(bookingId)}</Text>
      <Text>Name: {clientName} </Text>
      <Text>Contact Number: {contactNumber}</Text>
      <Text style={styles.textInfoStyle}>Status: {status}</Text>
      {acceptedRideRequest?.ride_request_id !== bookingId &&
        !declinedRideRequests?.find(
          item => item?.ride_request_id === bookingId,
        ) && (
          <View style={styles.btnRowStyle}>
            <Button
              label="Decline"
              variant="negative"
              onPress={btnDeclineOnPress}
            />
            <Button
              label="Accept"
              variant="positive"
              onPress={btnAcceptOnPress}
            />
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: DEVICE_DIMENSIONS.width * 0.8,
    borderWidth: 0.3,
    gap: 8,
  },
  textInfoStyle: {
    textTransform: 'capitalize',
  },
  btnRowStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
});

export default Card;
