import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import InfoPage from './InfoPage';
import Recommend from './Recommend';
import ShowMaps from './ShowMaps';

export const RootStack = createStackNavigator({
    Recommend: { screen: Recommend },
    InfoPage: { screen: InfoPage },
    ShowMaps: { screen: ShowMaps },
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

class RecommendScreen extends Component {
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

export default connect(null, homeActions)(RecommendScreen);

