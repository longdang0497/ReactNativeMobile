import React, { Component } from 'react';
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.firstPart}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name='bars' size={22} color='#fff' />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}> DateNow </Text>
                    <TouchableOpacity onPress={null}>
                        <Icon name='share-alt' size={22} color='#fff' />
                    </TouchableOpacity>
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
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 17    
    }
});
