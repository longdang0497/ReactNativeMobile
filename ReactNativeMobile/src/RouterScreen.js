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
import { bindActionCreators } from 'redux';

import Main from './components/Main';
import Authentication from './components/Authentication';
import RecommendScreen from './components/Main/Recommend/index';
import InfoPage from './components/Main/Recommend/InfoPage';
import SplashScreen from './components/SplashScreen';
import constants from './components/Main/Constants';
import * as profileActions from './redux/actions/ProfileAction';
import * as userActions from './redux/actions/UserActions';
import getToken from './api/getToken';
import checkToken from './api/checkToken';

export const RootStack = createStackNavigator({
    Main,
    Authentication,
    RecommendScreen,
    InfoPage,
},
    {
        headerMode: 'none',
        initialRouteName: 'Authentication'
    });

class RouterScreen extends Component {
    state = { isLoading: true }

    componentDidMount() {
        this.getStorageItem();
        getToken()
            .then(token => checkToken(token))
            .then(responseJson => {
                if (responseJson.success) {
                    console.log(responseJson);
                    this.props.userActions.addUser(responseJson.user);
                    this.props.userActions.isSigned(true);
                }
            })
            .catch(err => console.log(err));
        setTimeout(() => this.setState({ isLoading: false }), 2000);
    }

    getStorageItem = async () => {
        let value;
        try {
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.TITLE);
            if (value !== null) {
                this.props.profileActions.changeTitle(value);
            }
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.BOTTOM_TEXT);
            if (value !== null) {
                this.props.profileActions.changeBottomText(value);
            }
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.BACKGROUND);
            if (value !== null) {
                this.props.profileActions.changeBackground(JSON.parse(value));
            }
            value = await AsyncStorage.getItem(constants.STORAGE_KEY.BLUR);
            if (value !== null) {
                // eslint-disable-next-line radix
                this.props.profileActions.changeBlur(parseFloat(value));
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

function mapDispatchToProps(dispatch) {
    return {
        profileActions: bindActionCreators(profileActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(RouterScreen);
