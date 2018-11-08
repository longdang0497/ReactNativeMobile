import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, Alert,
    StyleSheet, Picker
} from 'react-native';

export default class DetailsRecommend extends Component {
    constructor() {
        super();
        this.state = {
            PickerValue: ''
        };
    }

    clickme = () => {
        const data = this.state.PickerValue;
        if (data === '') {
            Alert.alert('Please Select a Option');
        } else {
            Alert.alert(data);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>THIS IS THE DEAL's INFO</Text>
                <Picker
                    style={{ width: '80%' }}
                    selectedValue={this.state.PickerValue}
                    onValueChange={(itemValue, itemIndex) => 
                        this.setState({ PickerValue: itemValue })}
                >
                    <Picker.Item label="Select a option" value="" />
                    <Picker.Item label="Html" value="html" />
                    <Picker.Item label="Javascript" value="javascript" />
                </Picker>
                <TouchableOpacity onPress={this.clickme.bind(this)}>
                        <Text>CHỈ ĐƯỜNG</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
