import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import ActionButton from 'react-native-action-button';
import Dialog, { DialogButton, DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';

import icHeart from '../../../media/heart.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{ key: '1', title: 'item 1', time: '-20' }],
            popupVisible: false,
            itemIndex: null,
            popupText: null
        };
    }

    onRetrieveData() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Anniversary</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={listItem}
                />
                <ActionButton
                    size={50}
                    position="left"
                    offsetX={20}
                    offsetY={20}
                    shadowStyle={{ borderRadius: 50 }}
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => null}
                />
                <Dialog
                    visible={this.state.popupVisible}
                    dialogTitle={<DialogTitle title="Change Title" />}
                    width={0.7}
                    height={0.26}
                    actions={[
                        <DialogButton
                            key="cancel"
                            text="CANCEL"
                            textStyle={{ fontSize: 15 }}
                            onPress={() => { this.setState({ popupVisible: false }); }}
                        />,
                        <DialogButton
                            key="ok"
                            text="OK"
                            textStyle={{ fontSize: 15 }}
                            onPress={() => {
                                this.setState({ popupVisible: false });
                                this.onRetrieveData();
                            }}
                        />,
                    ]}
                    dialogAnimation={new ScaleAnimation({
                        toValue: 0, // optional
                        useNativeDriver: true, // optional
                    })}
                >
                    <TextInput
                        defaultValue={this.state.popupText}
                        style={styles.changeInputText}
                        onChangeText={(text) => this.setState({ popupText: text })}
                    />
                </Dialog>
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

const listItem = ({ item, index }) => (
    <Swipeout {...swipeSettings}>
        <TouchableOpacity
            style={listItemStyles.container}
            onPress={() => {
                this.setState({
                    popupVisible: true,
                    itemIndex: index,
                    popupText: item.title
                });
            }}
        >
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

