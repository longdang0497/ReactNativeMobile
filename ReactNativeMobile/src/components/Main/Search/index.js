import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ListSearch from './ListSearch';
import ShowMaps from '../Recommend/ShowMaps';

export const RootStack = createStackNavigator({
    ListSearch: { screen: ListSearch },
    ShowMaps: { screen: ShowMaps },
},
    {
        initialRouteName: 'ListSearch',
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

export default class SearchScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <RootStack />
            </View>
        );
    }
}

