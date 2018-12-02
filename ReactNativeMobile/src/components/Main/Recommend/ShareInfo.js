import React, { Component } from 'react';
import {
    View, Image,
    Text, Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Share from 'react-native-share';

const SCREEN_WIDTH = Dimensions.get('window').width;

function replaceString(string) {
    let str = '';
    str = string;
    str = str.toLowerCase();
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '-');
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/ +-+ /g, '-');
    str = str.replace(/ /g, '-');
    str = str.replace(/-+-/g, '-');
    str = str.trim();
    return str;
}

export default class ShareInfo extends Component {
    render() {
        const shareOptions = {
            title: replaceString(this.props.linkTitle),
            message: this.props.linkTitle,
            url: 'https://www.meete.co/khuyen-mai/' + replaceString(this.props.linkTitle) + '/' + this.props.linkID,
            subject: 'Share Link' //  for email
        };

        return (
            /* eslint-disable global-require */
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btnShareDeal}
                    onPress={() => {
                        //this.onCancel();
                        setTimeout(() => {
                            Share.open(shareOptions);
                        }, 300);
                    }}
                >
                    <Image
                        source={require('../../../../assets/appicon/ic_share.png')}
                        style={styles.imgIcon}
                    />
                    <Text
                        style={{ textAlign: 'center', color: 'white', paddingLeft: 10, fontFamily: 'Rubik-Medium' }}
                    >SHARE</Text>
                </TouchableOpacity>
            </View>
            /* eslint-enable global-require */
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    instructions: {
        marginTop: 20,
        marginBottom: 20,
    },
    btnShareDeal: {
        flexDirection: 'row',
        width: SCREEN_WIDTH,
        backgroundColor: '#DD4132',
        padding: 15,
        borderColor: 'black',
        justifyContent: 'center'
    },
});
