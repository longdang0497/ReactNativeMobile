import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import SignIn from './SignIn';
import SignUp from './SignUp';

const { height } = Dimensions.get('window');

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  componentDidMount() {
    if (this.props.isSigned) {
      this.props.navigation.replace('Main');
    }
  }

  signIn() {
    this.setState({ isSignIn: true });
  }

  signUp() {
    this.setState({ isSignIn: false });
  }
  render() {
    const { navigation } = this.props;
    const { isSignIn } = this.state;
    const MainJSX = isSignIn ? SignIn : SignUp;
    return (
      <View style={styles.container}>
        <View style={styles.firstPart}>
          <Text style={styles.titleStyle}>Let's Date</Text>
          <View />
        </View>
        <MainJSX navigation={navigation} />
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

const mapStateToProps = state => ({
  isSigned: state.user.isSigned
});

export default connect(mapStateToProps, null)(Authentication);

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
    justifyContent: 'center',
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

