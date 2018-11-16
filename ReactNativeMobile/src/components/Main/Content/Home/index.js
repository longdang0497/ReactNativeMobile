import React, { Component } from 'react';
import {
    View,
    Text, TouchableWithoutFeedback,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import defaultAvatar from '../../../../media/avatar_user_default.png';
import defaultBackground from '../../../../media/backgound_default.jpg';
import icHeart from '../../../../media/heart.png';

export default class Home extends Component {
    render() {
        return (
            <ImageBackground
                source={defaultBackground}
                imageStyle={{ resizeMode: 'cover' }}
                blurRadius={1}
                style={styles.container}
            >
                <View style={styles.userInfoContainer}>
                    <View style={styles.userContainer}>
                        <Image source={defaultAvatar} style={styles.avatarStyle} />
                        <Text style={styles.textStyle}>User 1</Text>
                    </View>
                    <View style={{ flex: 1, padding: 40 }}>
                        <TouchableWithoutFeedback onPress={() => this.view.bounce(1200)}>
                            <Animatable.View ref={(c) => this.view = c}>
                                <Image source={icHeart} style={styles.iconHeartStyle} />
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.userContainer}>
                        <Image source={defaultAvatar} style={styles.avatarStyle} />
                        <Text style={styles.textStyle}>User 2</Text>
                    </View>
                </View>
                <View style={styles.timeInfoContainer}>
                    <Text style={styles.textStyle}>Been Together</Text>
                    <Text style={styles.timeTextStyle}>1 years</Text>
                    <Text style={styles.textStyle}>Today</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        alignItems: 'center'
    },
    userContainer: {
        alignItems: 'center'
    },
    timeInfoContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    iconHeartStyle: {
        width: 70,
        height: 70
    },
    avatarStyle: {
        width: 80,
        height: 80,
        marginBottom: 7,
        borderRadius: 80
    },
    textStyle: {

    },
    timeTextStyle: {
        marginVertical: 10,
        fontSize: 20,
        fontStyle: 'italic'
    }
});
