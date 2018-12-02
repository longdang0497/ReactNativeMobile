import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import InfoPage from '../InfoPage';
import FoodListDeal from './FoodListDeal';
import InfoMap from '../InfoMap';

export const RootStack = createStackNavigator({
    FoodListDeal,
    InfoPage,
    InfoMap
},
    {
        initialRouteName: 'FoodListDeal',
        navigationOptions: {
            header: null
        }
    }
);

export default class FoodScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <RootStack />
            </View>           
        );
    }
}

