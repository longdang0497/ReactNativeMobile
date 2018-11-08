import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import InfoPage from './InfoPage';
import Recommend from './Recommend';

export const RootStack = createStackNavigator({
    Recommend: { screen: Recommend },
    InfoPage: { screen: InfoPage }
  },
  {
    initialRouteName: 'Recommend'
  });

export default class RecommendScreen extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}

