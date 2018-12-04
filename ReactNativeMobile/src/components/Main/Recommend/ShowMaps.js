import React, { Component } from 'react';
import {
    View, Dimensions,
    StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { fetchLocation } from '../../../redux/actions/SearchAction';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ShowMaps extends Component {
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

    componentDidMount() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        this.props.fetchLocation(item.id);
    }

    onRegionChangeComplete() {
        this.setState({
            region: {
                latitude: Number.parseFloat(this.props.location.lat),
                longitude: Number.parseFloat(this.props.location.lon),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0411
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.location &&
                    <MapView
                        style={styles.map}
                        region={this.state.region}
                        onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
                    >
                        <MapView.Marker
                            coordinate={this.state.region}
                        />
                    </MapView>
                }
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

function mapStateToProps(state) {
    return {
        location: state.search.location,
        isFetching: state.search.isFetching,
    };
}

export default connect(mapStateToProps, { fetchLocation })(ShowMaps);
