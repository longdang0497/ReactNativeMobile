import {
    StyleSheet, Text, View, ScrollView,
    Image, Animated,
    Dimensions, SafeAreaView, TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
    static NavigationOptions = {
        backgroundColor: null,
        opacity: 100
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 2 }}>
                    <View style={style.btnContainer}>
                        <TouchableOpacity style={style.btnNew}>
                            <Text>Mới Nhất</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnNear}>
                            <Text>Gần Nhất</Text>
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
        borderRadius: 20,
        backgroundColor: 'red',
        padding: 15
    },
    btnNear: {
        borderRadius: 20,
        backgroundColor: 'green',
        padding: 15
    },
});
