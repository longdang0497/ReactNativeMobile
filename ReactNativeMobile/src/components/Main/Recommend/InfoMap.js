import React, { Component } from 'react';
import {
    View, Dimensions,
    StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class InfoMap extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        region: {
            latitude: 10.772237053021,
            longitude: 106.70358685,
            latitudeDelta: 0.09,
            longitudeDelta: 0.09
        }
    }

    onRegionChangeComplete() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        item.locations.map((obj) => (
            this.setState({
                region: {
                    latitude: Number.parseFloat(obj.lat),
                    longitude: Number.parseFloat(obj.lon),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0411
                }
            })
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                >
                    <MapView.Marker
                        coordinate={this.state.region}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
