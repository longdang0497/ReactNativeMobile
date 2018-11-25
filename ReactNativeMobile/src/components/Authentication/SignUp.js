import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    Dimensions
} from 'react-native';
import { ProgressDialog } from 'react-native-simple-dialogs';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/UserActions';
import saveToken from '../../api/saveToken';

import signUp from '../../api/signUp';

const { height } = Dimensions.get('window');

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        inProgress: false
    }

    onSignUp() {
        this.setState({ inProgress: true });
        signUp(
            this.state.email.trim(),
            this.state.password,
            this.state.passwordConfirm,
            this.state.name.trim()
        )
            .then((responseJson) => {
                this.setState({ inProgress: false });
                console.log(responseJson);
                if (responseJson.success) {
                    this.refs.tiName.clear();
                    this.refs.tiEmail.clear();
                    this.refs.tiPassword.clear();
                    this.refs.tiPasswordConfirm.clear();
                    Alert.alert(
                        'Sign Up',
                        'Sign up successed!!',
                        [
                            {
                                text: 'Sign In',
                                onPress: () => {
                                    this.props.addUser(responseJson.user);
                                    saveToken(responseJson.user.authentication_token);
                                    this.props.navigation.replace('Main');
                                },
                                style: 'ok'
                            },
                            { text: 'Cancel', style: 'cancel' }
                        ],
                        { cancelable: false }
                    );
                } else {
                    Alert.alert(
                        'Sign Up',
                        `Sign up failed!! 
                            \n${responseJson.message.toString().replace(',', '\n')}`,
                        [
                            { text: 'Cancel', style: 'cancel' }
                        ],
                        { cancelable: false }
                    );
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View>
                <TextInput
                    ref="tiName"
                    style={styles.accountInput}
                    onChangeText={(val) => this.setState({ name: val })}
                    maxLength={30}
                    placeholder="Enter your name"
                />
                <TextInput
                    ref="tiEmail"
                    style={styles.accountInput}
                    onChangeText={(val) => this.setState({ email: val })}
                    maxLength={30}
                    placeholder="Enter your email"
                />
                <TextInput
                    ref="tiPassword"
                    style={styles.accountInput}
                    onChangeText={(val) => this.setState({ password: val })}
                    maxLength={20}
                    secureTextEntry
                    placeholder="Enter your password (at least 6 characters)"
                />
                <TextInput
                    ref="tiPasswordConfirm"
                    style={styles.accountInput}
                    onChangeText={(val) => this.setState({ passwordConfirm: val })}
                    maxLength={20}
                    secureTextEntry
                    placeholder="Re-enter your password"
                />
                <TouchableOpacity style={styles.btnSignIn} onPress={this.onSignUp.bind(this)}>
                    <Text style={styles.btnSignInText}>SIGN UP NOW</Text>
                </TouchableOpacity>
                <ProgressDialog
                    visible={this.state.inProgress}
                    title="Signing up"
                    message="Please, wait..."
                />
            </View>
        );
    }
}

export default connect(null, actions)(SignUp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    firstPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 25
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    accountInput: {
        height: height * 0.07,
        backgroundColor: '#FFF',
        marginBottom: 10,
        borderRadius: 30,
        paddingHorizontal: 20
    },
    btnSignIn: {
        height: height * 0.07,
        alignItems: 'center',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center'
    },
    btnSignInText: {
        color: '#FFF'
    }
});
