import React, { Component } from 'react';
import {
    View, Dimensions,
    Text, Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';

export default class ShowMaps extends Component {

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    map: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0, 
        position: 'absolute'
    },
    marker: {

    }
});
