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
    Alert,
    Dimensions,
    StyleSheet
} from 'react-native';
import { ProgressDialog } from 'react-native-simple-dialogs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Slider } from 'react-native-elements';
import Dialog, { DialogButton, DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import CookieManager from 'react-native-cookies';
import { NavigationEvents } from 'react-navigation';


import * as profileActions from '../../../../redux/actions/ProfileAction';
import * as userActions from '../../../../redux/actions/UserActions';
import * as homeActions from '../../../../redux/actions/HomeActions';
import constants from '../../Constants';
import signOut from '../../../../api/signOut';
import saveToken from '../../../../api/saveToken';
import updateUser from '../../../../api/updateUser';
import getCookie from '../../../../api/getCookie';

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

const loverNameText = 'Your lover';

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
            getImageSuccess: false,
            isDateTimePickerVisible: false,
            popupVisible: false,
            popupType: '',
            popupTitle: '',
            popupText: '',
            inProgress: false
        };
    }

    onSignOut() {
        Alert.alert(
            'Sign Out',
            'Are you sure you want to signout?',
            [
                {
                    text: 'Sign Out',
                    onPress: () => {
                        this.setState({ inProgress: true });
                        getCookie()
                            .then(cookie => {
                                signOut(cookie, this.props.user.email)
                                    .then((responseJson) => {
                                        this.setState({ inProgress: false });
                                        console.log(responseJson);
                                        if (responseJson.success) {
                                            saveToken('');
                                            this.props.userActions.isSigned(false);
                                            this.props.screenProps.replace('Authentication');
                                        }
                                    })
                                    .catch(err => console.log(err));
                            })
                            .catch(err => console.log(err));
                    },
                    style: 'ok'
                },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: false }
        );
    }

    onUpdateUser(update) {
        this.inProgress = true;
        CookieManager.clearAll()
            .then(() => {
                getCookie()
                    .then(cookie => {
                        updateUser(cookie, this.props.user.id, update)
                            .then(responseJson => {
                                console.log(responseJson);
                                if (responseJson.success) {
                                    this.inProgress = false;
                                    this.props.userActions.addUser(responseJson.user);
                                    this.setAlert('Change Info', 'Change Info Successed!!');
                                } else this.setAlert('Change Info', 'Change Info Failed!!');
                            })
                            .catch(err => console(err));
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    onRetrieveData() {
        const { popupText } = this.state;
        switch (this.state.popupType) {
            case popupType.userName:
                this.onUpdateUser({ name: popupText.trim() });
                break;
            case popupType.loverName:
                this.onUpdateUser({ lover_name: popupText.trim() });
                break;
            case popupType.title:
                this.props.profileActions.changeTitle(popupText.trim());
                this.saveItem(constants.STORAGE_KEY.TITLE, popupText.trim());
                break;
            case popupType.bottomText:
                this.props.profileActions.changeBottomText(popupText.trim());
                this.saveItem(constants.STORAGE_KEY.BOTTOM_TEXT, popupText.trim());
                break;
            default:
                break;
        }
    }

    setAlert(title, content) {
        Alert.alert(
            title,
            content,
            [
                { text: 'OK', style: 'ok' }
            ],
            { cancelable: false }
        );
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
        this.onUpdateUser({ start_date: moment.utc(date).format() });
        this.hideDateTimePicker();
    };

    openImagePicker(type) {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                this.setState({ getImageSuccess: false });
                console.log('User cancelled image picker');
            } else if (response.error) {
                this.setState({ getImageSuccess: false });
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
                        this.props.profileActions.changeBackground(source);
                        this.saveItem(constants.STORAGE_KEY.BACKGROUND, JSON.stringify(source));
                        Alert.alert(
                            'Change Background',
                            'Change Background successed!!!',
                            [
                                { text: 'OK', style: 'ok' }
                            ],
                            { cancelable: false }
                        );
                        break;
                }
            }
        });
    }

    render() {
        const { user } = this.props;
        return (
            <ScrollView style={styles.container}>
                <NavigationEvents
                    onWillFocus={() => {
                        this.props.homeActions.enableHeader();
                    }}
                />
                <View style={styles.infoContainer}>
                    <TouchableOpacity onPress={this.openImagePicker.bind(this)}>
                        <Image
                            source={user.avatar.url ? user.avatar.url : avatar}
                            style={styles.avatartStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            this.openPopup(popupType.userName, 'User Name', user.name)}
                    >
                        <Text
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            style={{ width: 200, textAlign: 'center', flexWrap: 'wrap' }}
                        >{user.name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.title}>Name</Text>
                    <TouchableOpacity
                        style={styles.settingItem}
                        onPress={() =>
                            this.openPopup(popupType.loverName, 'lover Name',
                                user.lover_name ? user.lover_name : loverNameText)}
                    >
                        <Text style={styles.textTitleItem}>Lover</Text>
                        <View style={styles.rightViewItem}>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.textSetting}
                            >
                                {user.lover_name ? user.lover_name : loverNameText}
                            </Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.textSetting}
                            >{this.props.titleText}</Text>
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
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.textSetting}
                            >{this.props.bottomText}</Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Date Settings</Text>
                    <TouchableOpacity style={styles.settingItem} onPress={this.showDateTimePicker}>
                        <Text style={styles.textTitleItem}>Start date</Text>
                        <View style={styles.rightViewItem}>
                            <Text style={styles.textSetting}>
                                {moment(user.start_date).format('MMM D, YYYY')}
                            </Text>
                            <Icon name='angle-right' size={25} color='#A3A3A3' />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Start from Zero</Text>
                        <View style={styles.rightViewItem}>
                            <Switch
                                value={this.props.isStartZero}
                                onValueChange={() => this.props.profileActions.isStartZeroOn()}
                            />
                        </View>
                    </View>
                    <View style={styles.settingItem}>
                        <Text style={styles.textTitleItem}>Show Year, Month, Days</Text>
                        <View style={styles.rightViewItem}>
                            <Switch
                                value={this.props.isDayMonthYear}
                                onValueChange={() => this.props.profileActions.isDaysOn()}
                            />
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
                                maximumValue={2}
                                step={0.2}
                                thumbTintColor='#34B089'
                                value={this.props.blur}
                                onValueChange={(val) => {
                                    this.props.profileActions.changeBlur(val);
                                    this.saveItem(constants.STORAGE_KEY.BLUR, val.toString());
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Account Settings</Text>
                    <TouchableOpacity
                        style={styles.settingItem}
                        onPress={this.onSignOut.bind(this)}
                    >
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
                        />
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
                    date={new Date(user.start_date ? user.start_date : '')}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
                <ProgressDialog
                    visible={this.state.inProgress}
                    title="Processing"
                    message="Please, wait..."
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    isDayMonthYear: state.profile.isDayMonthYear,
    isStartZero: state.profile.isStartZero,
    titleText: state.profile.titleText,
    bottomText: state.profile.bottomText,
    blur: state.profile.backgroundBlur,
    user: state.user.user
});

function mapDispatchToProps(dispatch) {
    return {
        profileActions: bindActionCreators(profileActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        homeActions: bindActionCreators(homeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: height / 13
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
    btnSignOut: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF6F61',
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
        backgroundColor: '#FEDBD0',
        borderWidth: 0.2,
        borderColor: '#442C2E',
        fontWeight: 'bold'
    },
    textTitleItem: {
        
    },
    textSetting: {
        width: 200,
        textAlign: 'right',
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
    },
    txtButton: {
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        paddingRight: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    imgIcon: {
        width: 20,
        height: 20,
        paddingRight: 20
    },
    usrContainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
    }
});
