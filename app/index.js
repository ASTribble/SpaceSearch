import React from 'react';
import { StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import {store} from './store';

import {App} from './App';

export default class Root extends React.Component {

  render() {
    
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}