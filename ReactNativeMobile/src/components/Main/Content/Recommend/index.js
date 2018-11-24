import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import InfoPage from './InfoPage';
import Recommend from './Recommend';
import ShowMaps from './ShowMaps';

export const RootStack = createStackNavigator({
    Recommend: { screen: Recommend },
    InfoPage: { screen: InfoPage },
    ShowMaps: { screen: ShowMaps },
},
    {
        initialRouteName: 'Recommend',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        
    });

export default class RecommendScreen extends Component {
    render() {
        return (
            <NavigationEvents
                onWillFocus={() => {
                    this.props.homeActions.enableHeader();
                }}
            />
            <RootStack />
        );
    }
}

