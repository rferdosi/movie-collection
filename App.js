import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';

import {AppStack} from './src/navigators';
import reducer from './src/reducers';
import {createStore} from 'redux';

const store = createStore(reducer);

const App = () => (
  <ReduxProvider store={store}>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  </ReduxProvider>
);

export default App;
