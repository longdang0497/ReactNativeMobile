import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Menu Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        alignItems: 'center'
    }
});

export default Menu;

