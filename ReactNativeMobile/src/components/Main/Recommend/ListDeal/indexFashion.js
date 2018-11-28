import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import InfoPage from '../InfoPage';
import FashionListDeal from './FashionListDeal';

export const RootStack = createStackNavigator({
    FashionListDeal,
    InfoPage
},
    {
        initialRouteName: 'FashionListDeal',
        navigationOptions: {
            header: null
        }
    }
);

export default class FashionScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <RootStack />
            </View>           
        );
    }
}

