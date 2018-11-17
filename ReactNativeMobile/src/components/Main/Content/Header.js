import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name='bars' size={22} color='#442C2E' />
                </TouchableOpacity>
                <Text style={styles.titleStyle}> DateNow </Text>
                <TouchableOpacity onPress={null}>
                    <Icon name='share-alt' size={22} color='#442C2E' />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 15,
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
