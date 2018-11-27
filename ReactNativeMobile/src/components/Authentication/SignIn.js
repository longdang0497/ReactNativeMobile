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

import signIn from '../../api/signIn';

const { height } = Dimensions.get('window');

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        inProgress: false
    }

    onSignIn() {
        this.setState({ inProgress: true });
        signIn(
            this.state.email.trim(),
            this.state.password
        )
            .then((responseJson) => {
                this.setState({ inProgress: false });
                console.log(responseJson);
                if (responseJson.success) {
                    this.refs.tiEmail.clear();
                    this.refs.tiPassword.clear();
                    this.props.addUser(responseJson.user);
                    saveToken(responseJson.user.authentication_token);
                    this.props.navigation.replace('Main');
                } else {
                    Alert.alert(
                        'Sign In',
                        `Sign in failed!! 
                            \n${responseJson.message.toString().replace(',', '\n')}`,
                        [
                            { text: 'Cancel', style: 'cancel' }
                        ],
                        { cancelable: false }
                    );
                }
            })
            .catch(() => this.setState({ inProgress: false }));
    }

    render() {
        return (
            <View>
                <TextInput
                    ref="tiEmail"
                    style={styles.accountInput}
                    onChangeText={(val) => this.setState({ email: val })}
                    placeholder="Enter your email"
                />
                <TextInput
                    ref="tiPassword"
                    style={styles.accountInput}
                    onChangeText={(val) => this.setState({ password: val })}
                    secureTextEntry
                    placeholder="Enter your password"
                />
                <TouchableOpacity style={styles.btnSignIn} onPress={this.onSignIn.bind(this)}>
                    <Text style={styles.btnSignInText}>SIGN IN NOW</Text>
                </TouchableOpacity>
                <ProgressDialog
                    visible={this.state.inProgress}
                    title="Signing in"
                    message="Please, wait..."
                />
            </View>
        );
    }
}

export default connect(null, actions)(SignIn);

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
