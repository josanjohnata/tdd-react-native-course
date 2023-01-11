import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './screens';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
