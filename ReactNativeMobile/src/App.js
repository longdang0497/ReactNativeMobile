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
import Recommend from './components/Main/Recommend/index';
import InfoPage from './components/Main/Recommend/InfoPage';

export const RootStack = createStackNavigator({
  Main,
  Authentication,
  Recommend,
  InfoPage
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
