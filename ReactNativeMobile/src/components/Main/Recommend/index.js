import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import InfoPage from './InfoPage';
import Recommend from './Recommend';

export const RootStack = createStackNavigator({
    Recommend: { screen: Recommend },
    InfoPage: { screen: InfoPage },
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
            <View style={{ flex: 1 }}>
                <RootStack />
            </View>
        );
    }
}

