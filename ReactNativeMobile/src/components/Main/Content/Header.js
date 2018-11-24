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

import * as actions from '../../../redux/actions/HomeActions';
import constants from '../Constants';

const { height } = Dimensions.get('window');

class Header extends Component {
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
                        <Icon name='bars' size={22} color='#442C2E' />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}> DateNow </Text>
                    <TouchableOpacity
                        onPress={() => constants.takeSnapShot()}
                    >
                        <Icon name='share-alt' size={22} color='#442C2E' />
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
        height: height / 11,
        backgroundColor: '#FEDBD0',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    secondPart: {
        height: height / 20,
        backgroundColor: '#fff',
        paddingLeft: 10,
        padding: 1
    },
    titleStyle: {
        color: '#442C2E',
        fontFamily: 'Rubik-Medium',
        fontSize: 17
    }
});
