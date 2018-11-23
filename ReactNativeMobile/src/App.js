import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Store from './redux/store/index';

import Main from './components/Main';
import Authentication from './components/Authentication';
import RecommendScreen from './components/Main/Recommend/index';
import InfoPage from './components/Main/Recommend/InfoPage';

export const RootStack = createStackNavigator({
  Main,
  Authentication,
  RecommendScreen,
  InfoPage,
},
{
  headerMode: 'none',
  initialRouteName: 'Main'
});

const store = Store();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
