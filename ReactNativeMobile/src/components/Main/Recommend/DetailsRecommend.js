import React, { Component } from 'react';
import {
    View,
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

    // clickme = () => {
    //     const data = this.state.PickerValue;
    //     if (data === '') {
    //         Alert.alert('Please Select a Option');
    //     } else {
    //         Alert.alert(data);
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textBtn}>THIS IS THE DEAL's INFO</Text>
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
    },
    textBtn: {
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
    }
});
