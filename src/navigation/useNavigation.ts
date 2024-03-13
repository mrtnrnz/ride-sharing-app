import {
  useNavigation as rnUseNavigation,
  type NavigationProp,
} from '@react-navigation/native';

import type {RootStackParamList} from './types';

type UseNavigation = () => NavigationProp<RootStackParamList>;

const useNavigation: UseNavigation = (): ReturnType<UseNavigation> =>
  rnUseNavigation<NavigationProp<RootStackParamList>>();

export default useNavigation;
