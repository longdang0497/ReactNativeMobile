import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './redux/store/index';

import RouterScreen from './RouterScreen';

const store = Store();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterScreen />
      </Provider>
    );
  }
}
