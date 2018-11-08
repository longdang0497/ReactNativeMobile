import React, { Component } from 'react';
import { View, 
    Text,
    Dimensions, 
    StyleSheet,
    TextInput 
} from 'react-native';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstPart}>
                    <Text style={styles.titleStyle}> Date Now </Text>
                </View>
                <TextInput 
                    style={styles.secondPart} 
                    placeholder="What do you want to buy?"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 8,
        backgroundColor: '#34B089',     
        padding: 10,
        justifyContent: 'space-between'
    },
    firstPart: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondPart: {
        height: height / 20,
        backgroundColor: '#fff',
        paddingLeft: 10,
        padding: 1
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 17    
    }
});
