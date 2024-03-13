import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from './types';
import type {JSX} from 'react';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerTitle: 'RIDE REQUEST DETAILS',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}
