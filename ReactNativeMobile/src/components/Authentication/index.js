import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignIn from './SignIn';
import SignUp from './SignUp';

const { height } = Dimensions.get('window');

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  signIn() {
    this.setState({ isSignIn: true });
  }

  signUp() {
    this.setState({ isSignIn: false });
  }
  render() {
    const { isSignIn } = this.state;
    const MainJSX = isSignIn ? SignIn : SignUp;
    return (
      <View style={styles.container}>
        <View style={styles.firstPart}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name='chevron-left' size={25} color='#fff' />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Let's Date</Text>
          <View />
        </View>
        <MainJSX />
        <View style={styles.controlStyle}>
          <TouchableOpacity style={styles.btnControlStyle} onPress={this.signIn.bind(this)}>
            <Text style={isSignIn ? styles.activeStyle : styles.inactiveStyle}> SIGN IN </Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#34B089', width: 3 }} />
          <TouchableOpacity style={styles.btnControlStyle} onPress={this.signUp.bind(this)}>
            <Text style={isSignIn ? styles.inactiveStyle : styles.activeStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const ControlHeight = height * 0.06;

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
  controlStyle: {
    height: ControlHeight,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 30,
    margin: 10
  },
  btnControlStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStyle: {
    color: '#34B089'
  },
  inactiveStyle: {
    color: '#D7D7D7',
  }
});

