import {
    StyleSheet, Text, View, ScrollView,
    Image, Animated, TextInput,
    Dimensions, SafeAreaView, TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window');

/* eslint-disable global-require */
const images = [
    { id: 1, src: require('../../../../assets/background/photo-1.jpg') },
    { id: 2, src: require('../../../../assets/background/photo-2.jpg') },
    { id: 4, src: require('../../../../assets/background/photo-4.jpg') },
    { id: 5, src: require('../../../../assets/background/photo-5.jpg') },
    { id: 6, src: require('../../../../assets/background/photo-6.jpg') },
    { id: 7, src: require('../../../../assets/background/photo-7.jpg') },
    { id: 8, src: require('../../../../assets/background/photo-8.jpg') },
    { id: 9, src: require('../../../../assets/background/photo-9.jpg') },
    { id: 10, src: require('../../../../assets/background/photo-10.jpg') }
];
/* eslint-enable global-require */

export default class Recommend extends Component {
    static navigationOptions = {
        headerTitle: (
            <TextInput
                inlineImageLeft='ic_search'
                style={{
                    height: SCREEN_HEIGHT / 20,
                    width: SCREEN_WIDTH,
                    backgroundColor: '#fff',
                    padding: 20,
                    paddingLeft: 25,
                    borderWidth: 0.5,
                    borderColor: 'black'
                }}
                placeholder="Tìm kiếm"
            />
        ),
        /* eslint-disable global-require */
        //headerRight: (),
        /* eslint-enable global-require */
    }

    render() {
        return (
            /* eslint-disable global-require */
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 2 }}>
                    <View style={style.btnContainer}>
                        <TouchableOpacity style={style.btnNew}>
                            <Image
                                source={require('../../../../assets/appicon/ic_new.png')}
                                style={style.imgIcon}
                            />
                            <Text style={{ color: 'white' }}>Mới Nhất</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnNear}>
                            <Image
                                source={require('../../../../assets/appicon/ic_near.png')}
                                style={style.imgIcon}
                            />
                            <Text style={{ color: 'white' }}>Gần Nhất</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.recommendContainer}>
                        {images.map((image, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => this.props.navigation.navigate('InfoPage')}
                            >
                                <Animated.View style={style.cardHolder}>
                                    <Image source={image.src} style={style.imgRecommend} />
                                    <View style={style.txtRecommend}>
                                        <Text
                                            style={style.txtInfoRecommend}
                                        >THIS IS THE TITLE</Text>
                                    </View>
                                </Animated.View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
            /* eslint-enable global-require */
        );
    }
}

// export default class SwitchToInfo extends Component {
//     render() {
//         return (
//             <AppStackNavigator />
//         );
//     }
// }

const style = StyleSheet.create({
    recommendContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cardHolder: {
        height: SCREEN_WIDTH / 2,
        width: SCREEN_WIDTH / 2,
        padding: 15
    },
    txtRecommend: {
        flex: 1,
        padding: 20,
        backgroundColor: '#98DDDE',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    txtInfoRecommend: {
        fontFamily: 'FontAwesome',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imgRecommend: {
        flex: 3,
        height: null,
        width: null,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover'
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    btnNew: {
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#E94B3C',
        padding: 15,
        borderColor: 'black',
        justifyContent: 'center',
        width: SCREEN_WIDTH / 4
    },
    btnNear: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#88B04B',
        padding: 15,
        width: SCREEN_WIDTH / 4,
        borderColor: 'black',
    },
    btnFilter: {
        justifyContent: 'center',
        padding: 15,
    },
    searchBox: {
        height: SCREEN_HEIGHT / 20,
        backgroundColor: '#fff',
        paddingLeft: 10,
        padding: 1
    },
    imgIcon: {
        width: 20,
        height: 20,
        paddingRight: 20
    },
});
