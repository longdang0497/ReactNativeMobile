import {
    TextInput,
    Dimensions, SafeAreaView,
    View
} from 'react-native';
import React, { Component } from 'react';
import { createTabNavigator, TabNavigator } from 'react-navigation';
import BeautyListDeal from './ListDeal/BeautyListDeal';
import FashionListDeal from './ListDeal/FashionListDeal';
import FoodScreen from './ListDeal/indexFood';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window');

export default class Recommend extends Component {
    constructor() {
        super();
        this.state = {
            PickerValue: ''
        };
    }

    Tabs = navigation => {
        const Tabs = createTabNavigator(
            {
                FOOD: { screen: FoodScreen },
                BEAUTY: { screen: BeautyListDeal },
                FASHION: { screen: FashionListDeal }
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
            }
        );
        return <Tabs />;
    }

    render() {
        const { nav } = this.props;
        return (
            /* eslint-disable global-require */
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flexWrap: 'wrap' }}>
                    <TextInput
                        inlineImageLeft='ic_search'
                        style={{
                            height: SCREEN_HEIGHT / 17,
                            width: SCREEN_WIDTH,
                            backgroundColor: '#fff',
                            borderWidth: 0.5,
                            borderColor: '442C2E',
                            paddingLeft: 20,
                            paddingTop: 16,
                            paddingBottom: 16,
                            justifyContent: 'space-between'
                        }}
                        placeholder="What are you looking for?"
                    />
                </View>
                {this.Tabs(nav)}
            </SafeAreaView>
            /* eslint-enable global-require */
        );
    }
}
