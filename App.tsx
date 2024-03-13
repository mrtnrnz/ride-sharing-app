import {Provider} from 'react-redux';
import {NavigationContainer, StackNavigator} from './src/navigation';

import {store} from './src/redux/store';

export default function App(): JSX.Element {
  return (
    <Provider {...{store}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
