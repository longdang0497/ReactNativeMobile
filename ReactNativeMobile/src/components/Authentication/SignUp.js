import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
    Dimensions 
} from 'react-native';

const { height } = Dimensions.get('window');

export default class SignUp extends Component {
    render() {
        return (
            <View>
                <View>
                    <TextInput style={styles.accountInput} placeholder="Enter your name" />
                    <TextInput style={styles.accountInput} placeholder="Enter your email" />
                    <TextInput style={styles.accountInput} placeholder="Enter your password" />
                    <TextInput style={styles.accountInput} placeholder="Re-enter your password" />
                    <TouchableOpacity style={styles.btnSignIn}>
                        <Text style={styles.btnSignInText}>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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