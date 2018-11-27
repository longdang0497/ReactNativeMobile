/* eslint-disable no-case-declarations */
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
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CookieManager from 'react-native-cookies';

import icHeart from '../../../media/heart.png';
import getAnniList from '../../../api/getAnni';
import addAnni from '../../../api/addAnni';
import deleteAnni from '../../../api/deleteAnni';
import updateAnni from '../../../api/updateAnni';
import getCookie from '../../../api/getCookie';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            popupVisible: false,
            itemIndex: null,
            popupText: null,
            popupType: null,
            isDateTimePickerVisible: false,
            anniUpdateId: null,
        };
    }

    componentWillMount() {
        getAnniList(this.props.user.id)
            .then((responseJson) => {
                if (responseJson.length > 0) {
                    this.setState({ dataSource: responseJson });
                }
            })
            .catch(err => console.log(err));
    }

    onRetrieveData() {
        switch (this.state.popupType) {
            case 'change':
                const update = { title: this.state.popupText };
                this.onUpdateAnni(update);
                break;
            case 'action':
                this.showDateTimePicker();
                break;
            default:
        }
    }

    onUpdateAnni(update) {
        CookieManager.clearAll()
            .then(() => {
                getCookie()
                    .then(cookie => {
                        updateAnni(cookie, this.state.anniUpdateId, update)
                            .then(responseJson => {
                                if (responseJson.success) {
                                    const dataArray = this.state.dataSource;
                                    dataArray.splice(this.state.itemIndex, 1,
                                        responseJson.celebration);
                                    this.setState({ dataSource: dataArray });
                                }
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    ondeleteAnni(item, index) {
        deleteAnni(item.id)
            .then(responseJson => {
                if (responseJson.success) {
                    const dataArray = this.state.dataSource;
                    dataArray.splice(index, 1);
                    this.setState({ dataSource: dataArray });
                }
            })
            .catch(err => console.log(err));
    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    handleDatePicked = (date) => {
        const anni = {
            user_id: this.props.user.id,
            title: this.state.popupText,
            date_celebration: moment.utc(date).format(),
            note: ''
        };
        addAnni(anni)
            .then(responseJson => {
                if (responseJson.success) {
                    this.setState({
                        dataSource: [...this.state.dataSource, responseJson.celebration]
                    });
                }
            })
            .catch(err => console.log(err));
        this.hideDateTimePicker();
    };


    render() {
        const listItem = ({ item, index }) => (
            <Swipeout
                autoClose
                rowID={index}
                sectionID={1}
                right={[{
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => this.ondeleteAnni(item, index)
                }]}
            >
                <TouchableOpacity
                    style={listItemStyles.container}
                    onPress={() => {
                        this.setState({
                            popupVisible: true,
                            itemIndex: index,
                            popupText: item.title,
                            popupType: 'change',
                            anniUpdateId: item.id
                        });
                    }}
                >
                    <Text>{item.title}</Text>
                    <View style={listItemStyles.timeStyle}>
                        <Image
                            source={icHeart}
                            style={{ width: 20, height: 20, marginRight: 10 }}
                        />
                        <Text style={{ color: '#34B089' }}>
                            {
                                (new Date(item.date_celebration) - new Date()) / 86400000 > 0 ?
                                    Math.ceil((new Date(item.date_celebration) - new Date()) / 86400000) :
                                    Math.floor((new Date(item.date_celebration) - new Date()) / 86400000)
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        );

        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Anniversary</Text>
                <FlatList
                    style={{ backgroundColor: '#fff' }}
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
                    onPress={() => this.setState({ popupVisible: true, popupType: 'action' })}
                />
                <Dialog
                    visible={this.state.popupVisible}
                    dialogTitle={
                        <DialogTitle
                            title={this.state.popupType === 'change' ?
                                'Change Title' : 'Anniversary Title'
                            }
                        />
                    }
                    width={0.7}
                    height={154}
                    actions={[
                        <DialogButton
                            key="ok"
                            text="OK"
                            textStyle={{ fontSize: 15 }}
                            onPress={() => {
                                this.setState({ popupVisible: false });
                                this.onRetrieveData();
                            }}
                        />,
                        <DialogButton
                            key="cancel"
                            text="CANCEL"
                            textStyle={{ fontSize: 15 }}
                            onPress={() => { this.setState({ popupVisible: false }); }}
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
                <DateTimePicker
                    date={new Date()}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps, null)(Menu);

const listItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
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
    },
    changeInputText: {
        borderColor: '#34B089',
        borderWidth: 1,
        margin: 10,
        height: 30,
        padding: 0,
        paddingHorizontal: 5
    }
});

