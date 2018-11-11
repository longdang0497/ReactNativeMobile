/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Main from './components/Main';
import Authentication from './components/Authentication';
import SplashScreen from './components/SplashScreen';
import constants from './components/Main/Constants';
import * as actions from './redux/actions/ProfileAction';

export const RootStack = createStackNavigator({
    Main,
    Authentication
},
    {
        headerMode: 'none',
        initialRouteName: 'Main'
    });

class RouterScreen extends Component {
    state = { isLoading: true }

    componentDidMount() {
        this.getStorageItem();
        setTimeout(() => this.setState({ isLoading: false }), 2000);
    }

    getStorageItem = async () => {
        let value;
        try {
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.TITLE);
            if (value !== null) {
                this.props.changeTitle(value);
            }
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.BOTTOM_TEXT);
            if (value !== null) {
                this.props.changeBottomText(value);
            }
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.BACKGROUND);
            if (value !== null) {
                this.props.changeBackground(JSON.parse(value));
            }
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.BLUR);
            if (value !== null) {
                // eslint-disable-next-line radix
                this.props.changeBlur(parseFloat(value));
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render() {
        const { isLoading } = this.state;
        const MainJSX = isLoading ? SplashScreen : RootStack;
        return (
            <MainJSX />
        );
    }
}

export default connect(null, actions)(RouterScreen);
