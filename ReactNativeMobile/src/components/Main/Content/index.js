import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Profile from './Profile';
import RecommendScreen from '../Recommend/index';
import Header from './Header.js';
import SearchScreen from '../Search/index';

export const BottomTabNavigator = createBottomTabNavigator({
    Home: { screen: Home },
    Recommend: { screen: RecommendScreen },
    Search: { screen: SearchScreen },
    Profile: { screen: Profile }
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Recommend':
                        iconName = 'shopping-cart';
                        break;
                    case 'Search':
                        iconName = 'ic_search';
                        break;
                    default:
                        iconName = 'user';
                        break;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#442C2E',
            inactiveTintColor: '#caa99f',
            style: {
                backgroundColor: '#FEDBD0',
                borderTopWidth: 0.5,
                borderTopColor: '#442C2E',
            },
        },
        swipeEnabled: true
    },
);

export default class MainContent extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <BottomTabNavigator screenProps={this.props.screenProps} />
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Header navigation={navigation} />
                </View>
            </View >
        );
    }
}

