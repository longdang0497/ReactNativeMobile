import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import defaultAvatar from '../../../../media/avatar_user_default.png';
import icHeart from '../../../../media/heart.png';

class Home extends Component {
    render() {
        const { user } = this.props;
        return (
            <ImageBackground
                source={this.props.backgroundSource}
                imageStyle={{ resizeMode: 'cover' }}
                blurRadius={this.props.blur}
                style={styles.container}
            >
                <View style={styles.wrapper}>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.userContainer}>
                            <Image
                                source={user.avatar.url ? user.avatar.url : defaultAvatar}
                                style={styles.avatarStyle}
                            />
                            <Text ellipsizeMode='tail' style={styles.textStyle}>{user.name}</Text>
                        </View>
                        <Image source={icHeart} style={styles.iconHeartStyle} />
                        <View style={styles.userContainer}>
                            <Image
                                source={user.lover_avatar.url ? user.lover_avatar.url
                                    : defaultAvatar}
                                style={styles.avatarStyle}
                            />
                            <Text ellipsizeMode='tail' style={styles.textStyle}>
                                {user.lover_name ? user.lover_name : 'Lover\'s Name'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.timeInfoContainer}>
                        <Text style={styles.textStyle}>{this.props.titleText}</Text>
                        <Text style={styles.timeTextStyle}>1 years</Text>
                        <Text style={styles.textStyle}>{this.props.bottomText}</Text>
                    </View>
                </View>
            </ImageBackground>
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

export default connect(mapStateToProps, null)(Home);

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
        opacity: 0.9
    },
    timeTextStyle: {
        marginVertical: 10,
        fontSize: 20,
        color: '#fff',
        fontStyle: 'italic'
    }
});
