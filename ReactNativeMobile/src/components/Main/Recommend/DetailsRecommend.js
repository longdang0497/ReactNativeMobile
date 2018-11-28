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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textBtn}>{this.props.logo}</Text>
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
        fontFamily: 'Rubik-Bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 30
    }
});
