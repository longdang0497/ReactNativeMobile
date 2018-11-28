import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import InfoPage from '../InfoPage';
import BeautyListDeal from './BeautyListDeal';

export const RootStack = createStackNavigator({
    BeautyListDeal,
    InfoPage
},
    {
        initialRouteName: 'BeautyListDeal',
        navigationOptions: {
            header: null
        }
    }
);

export default class BeautyScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <RootStack />
            </View>           
        );
    }
}

