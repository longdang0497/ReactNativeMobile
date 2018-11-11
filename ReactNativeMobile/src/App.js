/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './redux/store';
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
