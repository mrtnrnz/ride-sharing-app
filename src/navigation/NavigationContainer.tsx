import {NavigationContainer as NavContainer} from '@react-navigation/native';
import type {FC, JSX, PropsWithChildren, ReactElement} from 'react';

const NavigationContainer: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => <NavContainer>{children}</NavContainer>;

export default NavigationContainer;
