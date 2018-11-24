import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';

import defaultAvatar from '../../../../media/avatar_user_default.png';
import icHeart from '../../../../media/heart.png';
import * as actions from '../../../../redux/actions/HomeActions';
import constants from '../../Constants';

export class Home extends Component {
    constructor(props) {
        super(props);
        constants.takeSnapShot = this.takeSnapShot.bind(this);
    }

    viewShot = null

    takeSnapShot() {
        captureRef(this.viewShot, {
            format: 'jpg',
            quality: 0.8,
            result: 'data-uri'
        })
            .then(data => {
                const shareImageBase64 = {
                    title: 'React Native',
                    message: 'Date Now',
                    url: data,
                    subject: 'Share Link'
                };
                console.log(data);
                Share.open(shareImageBase64)
                    .catch(err => console.log(err));
            }
            )
            .catch(err => console.log(err));
    }
    
    render() {
        const { user } = this.props;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.hideHeader()}>
                <View ref={(viewRef) => { this.viewShot = viewRef; }} style={{ flex: 1 }}>
                    <ImageBackground
                        source={this.props.backgroundSource}
                        imageStyle={{ resizeMode: 'cover' }}
                        blurRadius={this.props.blur}
                        style={styles.container}
                    >
                        <TouchableWithoutFeedback onPress={() => this.props.hideHeader()}>
                            <View style={styles.wrapper}>
                                <View style={styles.userInfoContainer}>
                                    <View style={styles.userContainer}>
                                        <Image
                                            source={user.avatar.url ? user.avatar.url
                                                : defaultAvatar}
                                            style={styles.avatarStyle}
                                        />
                                        <Text
                                            numberOfLines={2}
                                            ellipsizeMode='tail'
                                            style={styles.textStyle}
                                        >{user.name}</Text>
                                    </View>
                                    <Image source={icHeart} style={styles.iconHeartStyle} />
                                    <View style={styles.userContainer}>
                                        <Image
                                            source={user.lover_avatar.url ? user.lover_avatar.url
                                                : defaultAvatar}
                                            style={styles.avatarStyle}
                                        />
                                        <Text
                                            numberOfLines={2}
                                            ellipsizeMode='tail'
                                            style={styles.textStyle}
                                        >
                                            {user.lover_name ? user.lover_name : 'Lover\'s Name'}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.timeInfoContainer}>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode='tail'
                                        style={styles.textStyle}
                                    >{this.props.titleText}</Text>
                                    <Text style={styles.timeTextStyle}>1 years</Text>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode='tail'
                                        style={styles.textStyle}
                                    >{this.props.bottomText}</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground >
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = state => ({
    titleText: state.profile.titleText,
    bottomText: state.profile.bottomText,
    backgroundSource: state.profile.imageSource,
    blur: state.profile.backgroundBlur,
    user: state.user.user
});

export default connect(mapStateToProps, actions)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    wrapper: {
        paddingVertical: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        backgroundColor: 'rgba(0, 0, 0, .4)'
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
        color: '#fff',
        fontFamily: 'Rubik-Medium',
        fontSize: 14
    },
    timeTextStyle: {
        marginVertical: 10,
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Rubik-LightItalic',
        width: 110,
        textAlign: 'center',
        opacity: 0.9
    }
});
