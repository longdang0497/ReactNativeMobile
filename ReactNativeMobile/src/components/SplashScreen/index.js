import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import animation from '../../media/heart_animation.json';

export default class SplashScreen extends Component {
    render() {
        return (
            <LottieView
                style={{ backgroundColor: '#FEDBD0' }}
                source={animation}
                autoPlay
            />
        );
    }
}
