import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import type {JSX} from 'react';

import type {RootStackParamList} from './types';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const BottomTab = createBottomTabNavigator<RootStackParamList>();

export default function BottomTabNavigator(): JSX.Element {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false, title: 'Home'}}
      />
      <BottomTab.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{headerShown: false, title: 'Details'}}
      />
    </BottomTab.Navigator>
  );
}
