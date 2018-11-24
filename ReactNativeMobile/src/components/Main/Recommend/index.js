import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { createStackNavigator, NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import InfoPage from './InfoPage';
import Recommend from './Recommend';
import ShowMaps from './ShowMaps';
import FoodListDeal from './ListDeal/FoodListDeal';
import FashionListDeal from './ListDeal/FashionListDeal';
import BeautyListDeal from './ListDeal/BeautyListDeal';
import * as homeActions from '../../../redux/actions/HomeActions';

export const RootStack = createStackNavigator({
    Recommend: { screen: Recommend },
    InfoPage: { screen: InfoPage },
    ShowMaps: { screen: ShowMaps },
    FoodScreen: { screen: FoodListDeal },
    FashionScreen: { screen: FashionListDeal },
    BeautyScreen: { screen: BeautyListDeal },
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

