import React, { Component } from 'react';
import {
  Text,
  View, Image,
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

  componentWillMount() {
    if (this.props.isSigned) {
      this.props.navigation.navigate('Main');
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
    /* eslint-disable global-require */
    return (
      <View style={styles.container}>
        <View style={styles.firstPart}>
          <Text
            style={{
              color: '#442C2E',
              fontFamily: 'Rubik-Medium',
              fontSize: 18
            }}
          >Let's</Text>
          <Text style={styles.titleStyle}>DATE NOW</Text>
          <View />
        </View>
        <MainJSX navigation={navigation} />
        <View style={styles.controlStyle}>
          <TouchableOpacity style={styles.btnControlStyle} onPress={this.signIn.bind(this)}>
            <Text style={isSignIn ? styles.activeStyle : styles.inactiveStyle}> SIGN IN </Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: '#442C2E', width: 2 }} />
          <TouchableOpacity style={styles.btnControlStyle} onPress={this.signUp.bind(this)}>
            <Text style={isSignIn ? styles.inactiveStyle : styles.activeStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
      /* eslint-enable global-require */
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
    backgroundColor: '#FEDBD0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  firstPart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingTop: 60
  },
  titleStyle: {
    color: '#442C2E',
    fontFamily: 'Rubik-Bold',
    fontSize: 50,
    paddingTop: 16
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
    color: '#442C2E',
    fontFamily: 'Rubik-Medium'
  },
  inactiveStyle: {
    color: '#caa99f',
    fontFamily: 'Rubik-Medium'
  }
});

