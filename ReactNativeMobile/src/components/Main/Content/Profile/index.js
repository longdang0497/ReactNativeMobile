/* eslint-disable one-var */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Switch,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Slider } from 'react-native-elements';
import Dialog, { DialogButton, DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import * as actions from '../../../../redux/actions/ProfileAction';
import constants from '../../Constants';

import avatar from '../../../../media/avatar_user_default.png';

const popupType = {
    userName: 'user name',
    loverName: 'lover name',
    title: 'title',
    bottomText: 'bottom text',
    date: 'date'
};

const imageType = {
    userAvatar: 'user avatar',
    loverAvatar: 'lover avatar',
    background: 'background'
};

let userNameText = 'User Name',
    loverNameText = 'Your lover',
    dateText = 'Now 1, 2017';

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: null,
            isDateTimePickerVisible: false,
            popupVisible: false,
            popupType: '',
            popupTitle: '',
            popupText: ''
        };
    }

    onRetrieveData() {
        const { popupText } = this.state;
        switch (this.state.popupType) {
            case popupType.userName:
                userNameText = popupText;
                break;
            case popupType.loverName:
                loverNameText = popupText;
                break;
            case popupType.title:
                this.props.changeTitle(popupText);
                this.saveItem(constants.STORAGE_KEY.TITLE, popupText);
                break;
            case popupType.bottomText:
                this.props.changeBottomText(popupText);
                this.saveItem(constants.STORAGE_KEY.BOTTOM_TEXT, popupText);
                break;
            case popupType.date:
                dateText = popupText;
                break;
            default:
                break;
        }
    }

    saveItem = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            console.log(value);
        } catch (error) {
            // Error saving data
        }
    }

    openPopup(_popupType, _popupTitle, _popupText) {
        this.setState({
            popupVisible: true,
            popupType: _popupType,
            popupTitle: _popupTitle,
            popupText: _popupText
        });
    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    handleDatePicked = (date) => {
        dateText = moment(date).format('MMM D, YYYY');
        this.hideDateTimePicker();
    };

    openImagePicker(type) {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                switch (type) {
                    case imageType.userAvatar:
                        break;
                    case imageType.loverAvatar:
                        break;
                    default:
                        this.props.changeBackground(source);
                        this.saveItem(constants.STORAGE_KEY.BACKGROUND, JSON.stringify(source));
                        break;
                }
            }
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.infoContainer}>
                    <TouchableOpacity onPress={this.openImagePicker.bind(this)}>
                        <Image source={avatar} style={styles.avatartStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            this.openPopup(popupType.userName, 'User Name', userNameText)}
                    >
                        <Text>{userNameText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.title}>Name</Text>
                    <TouchableOpacity
                        style={styles.settingItem}
                        onPress={() =>
                            this.openPopup(popupType.loverName, 'lover Name', loverNameText)}
                    >
                        <Text style={styles.textTitleItem}>Lover</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>{loverNameText}</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingItem}
                        onPress={this.openImagePicker.bind(this)}
                    >
                        <Text style={styles.textTitleItem}>Lover's Avatar</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Change</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingItem}
                        onPress={() => this.openPopup(
                            popupType.title, 'Title',
                            this.props.titleText
                        )}
                    >
                        <Text style={styles.textTitleItem}>Change Title</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>{this.props.titleText}</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingItem}
                        onPress={() => this.openPopup(
                            popupType.bottomText, 'Bottom Text',
                            this.props.bottomText
                        )}
                    >
                        <Text style={styles.textTitleItem}>Change Bottom Text</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>{this.props.bottomText}</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Date Settings</Text>
                    <TouchableOpacity style={styles.settingItem} onPress={this.showDateTimePicker}>
                        <Text style={styles.textTitleItem}>Start date</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>{dateText}</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Start from Zero</Text>
                        <View style={styles.rightViewItem}>
                            <Switch />
                        </View>
                    </View>
                    <View style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Show Year, Month, Days</Text>
                        <View style={styles.rightViewItem}>
                            <Switch />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Background Image</Text>
                    <TouchableOpacity
                        style={styles.settingItem}
                        onPress={this.openImagePicker.bind(this)}
                    >
                        <Text style={styles.textTitleItem}>Background Image</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>Change</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Background Blur</Text>
                        <View style={styles.rightViewItem}>
                            <Slider
                                style={{ width: 70 }}
                                maximumValue={1}
                                step={0.1}
                                thumbTintColor='#34B089'
                                value={this.props.blur}
                                onValueChange={(val) => {
                                    this.props.changeBlur(val);
                                    this.saveItem(constants.STORAGE_KEY.BLUR, val.toString());
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Account Settings</Text>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Sign Out</Text>
                        <View style={styles.rightViewItem}>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                </View>
                <Dialog
                    visible={this.state.popupVisible}
                    dialogTitle={<DialogTitle title={this.state.popupTitle} />}
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
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    titleText: state.profile.titleText,
    bottomText: state.profile.bottomText,
    blur: state.profile.backgroundBlur
});

export default connect(mapStateToProps, actions)(Profile);

const styles = StyleSheet.create({
    container: {

    },
    infoContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    avatartStyle: {
        width: 90,
        height: 90,
        marginBottom: 10,
        borderRadius: 90
    },
    settingItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7
    },
    rightViewItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        paddingLeft: 10,
        backgroundColor: '#34B089'
    },
    textTitleItem: {

    },
    textSetting: {
        color: '#A3A3A3',
        marginRight: 10
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
