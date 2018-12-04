import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { createStackNavigator, NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import ListSearch from './ListSearch';
import ShowMaps from '../Recommend/ShowMaps';
import * as homeActions from '../../../redux/actions/HomeActions';

export const RootStack = createStackNavigator({
    ListSearch: { screen: ListSearch },
    ShowMaps: { screen: ShowMaps },
},
    {
        initialRouteName: 'ListSearch',
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

class SearchScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavigationEvents
                    onWillFocus={() => {
                        this.props.enableHeader();
                    }}
                />
                <RootStack />
            </View>
        );
    }
}

export default connect(null, homeActions)(SearchScreen);

