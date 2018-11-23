import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Display from 'react-native-display';
import { connect } from 'react-redux';
import { captureScreen } from 'react-native-view-shot';
import Share from 'react-native-share';

import * as actions from '../../../redux/actions/HomeActions';

const { height } = Dimensions.get('window');

class Header extends Component {

    takeCapture() {
        captureScreen({
            format: 'jpg',
            quality: 0.8,
            result: 'data-uri'
        })
            .then(data => {
                const shareImageBase64 = {
                    title: 'React Native',
                    message: 'Date Now',
                    url: data,
                    subject: 'Share Link'
                };
                console.log(data);
                Share.open(shareImageBase64)
                    .catch(err => console.log(err));
                }
            )
            .catch(err => console.log(err));
    }

    render() {
        const { navigation } = this.props;
        return (
            <Display
                enable={this.props.isEnableHeader}
                enter='slideInDown'
                exit='slideOutUp'
            >
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name='bars' size={22} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}> DateNow </Text>
                    <TouchableOpacity
                        onPress={() => this.takeCapture()}
                    >
                        <Icon name='share-alt' size={22} color='#fff' />
                    </TouchableOpacity>
                </View>
            </Display>
        );
    }
}

const mapStateToProps = state => ({
    isEnableHeader: state.home.enableHeader
});

export default connect(mapStateToProps, actions)(Header);

const styles = StyleSheet.create({
    container: {
        height: height / 13,
        backgroundColor: '#34B089',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 17
    }
});
