import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import InfoPage from '../InfoPage';
import BeautyListDeal from './BeautyListDeal';
import InfoMap from '../InfoMap';

export const RootStack = createStackNavigator({
    BeautyListDeal,
    InfoPage,
    InfoMap,
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

