import {
    Dimensions, SafeAreaView,
} from 'react-native';
import React, { Component } from 'react';
import { createTabNavigator, TabNavigator } from 'react-navigation';
import BeautyScreen from './ListDeal/indexBeauty';
import FashionScreen from './ListDeal/indexFashion';
import FoodScreen from './ListDeal/indexFood';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Recommend extends Component {
    constructor() {
        super();
        this.state = {
            PickerValue: '',
            searchInput: ''
        };
    }

    Tabs = navigation => {
        const Tabs = createTabNavigator(
            {
                FOOD: { screen: FoodScreen },
                BEAUTY: { screen: BeautyScreen },
                FASHION: { screen: FashionScreen }
            },
            {
                ...TabNavigator.Presets.AndroidTopTabs,
                lazy: true,
                lazyLoad: false,
                tabBarOnPress: {
                    jumpToIndex: true,
                },
                tabBarOptions: {
                    scrollEnabled: true,
                    style: {
                        backgroundColor: '#FEDBD0'
                    },
                    tabStyle: {
                        width: SCREEN_WIDTH / 3
                    },
                    indicatorStyle: {
                        backgroundColor: '#442C2E',
                        width: SCREEN_WIDTH / 3,
                    },
                    labelStyle: {
                        fontFamily: 'Rubik-Medium',
                        color: '#442C2E',
                        fontWeight: 'bold',
                        justifyContent: 'center'
                    }
                }
            });
        return <Tabs />;
    }

    render() {
        const { nav } = this.props;
        return (
            /* eslint-disable global-require */
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                {this.Tabs(nav)}
            </SafeAreaView>
            /* eslint-enable global-require */
        );
    }
}

