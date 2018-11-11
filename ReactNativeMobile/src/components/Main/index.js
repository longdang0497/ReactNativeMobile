import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import Menu from './Menu';
import MainContent from './Content';

const { width } = Dimensions.get('window');

export default class Main extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <MyDrawer screenProps={navigation} />
    );
  }
}

const MyDrawer = createDrawerNavigator({
  Main: MainContent
},
  {
    contentComponent: Menu,
    drawerWidth: width * 0.6,
    drawerLockMode: 'locked-closed'
  }
);
