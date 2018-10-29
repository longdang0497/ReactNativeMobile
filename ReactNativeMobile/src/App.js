/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Main from './components/Main';
import Authentication from './components/Authentication';

export const RootStack = createStackNavigator({
  Main,
  Authentication
},
{
  headerMode: 'none',
  initialRouteName: 'Main'
});

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
