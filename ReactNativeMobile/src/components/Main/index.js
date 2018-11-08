import React, { Component } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Profile from './Profile';
import Recommend from './Recommend/index';
import Header from './Header.js';

export const BottomTabNavigator = createBottomTabNavigator({
    Home,
    Recommend,
    Profile
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
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        swipeEnabled: true
    },
);

export default class Main extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} />
                <BottomTabNavigator />
            </View>
        );
    }
}

