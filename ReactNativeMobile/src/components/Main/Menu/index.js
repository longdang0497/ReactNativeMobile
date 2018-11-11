import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import icHeart from '../../../media/heart.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{ key: '1', title: 'item 1', time: '-20' }]
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Anniversary</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={listItem}
                />
            </View>
        );
    }
}

const swipeSettings = {
    autoClose: true,
    right: [
        { text: 'Delete', type: 'delete' }
    ]
};

const listItem = ({ item }) => (
    <Swipeout {...swipeSettings}>
        <TouchableOpacity style={listItemStyles.container}>
            <Text>{item.title}</Text>
            <View style={listItemStyles.timeStyle}>
                <Image source={icHeart} style={{ width: 20, height: 20, marginRight: 10 }} />
                <Text>{item.time}</Text>
            </View>
        </TouchableOpacity>
    </Swipeout>
);

const listItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7,
        backgroundColor: '#fff'
    },
    timeStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089'
    },
    titleStyle: {
        padding: 5
    }
});

