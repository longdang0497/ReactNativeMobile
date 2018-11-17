import {
    StyleSheet, Text, View, ScrollView,
    Image, Animated, TextInput, Picker,
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
                placeholder="What are you looking for?"
            />
        ),
        /* eslint-disable global-require */
        //headerRight: (),
        /* eslint-enable global-require */
    }

    constructor() {
        super();
        this.state = {
            PickerValue: ''
        };
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
                            <Text style={style.txtButton}>Latest</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnNear}>
                            <Image
                                source={require('../../../../assets/appicon/ic_near.png')}
                                style={style.imgIcon}
                            />
                            <Text style={style.txtButton}>Nearby</Text>
                        </TouchableOpacity>
                        <Picker
                            style={style.btnFilter}
                            selectedValue={this.state.PickerValue}
                            textStyle={style.txtButton}
                            itemTextStyle={style.txtButton}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ PickerValue: itemValue })}
                        >
                            <Picker.Item label="Category" value="" />
                            <Picker.Item label="Food" value="food" />
                            <Picker.Item label="Beauty" value="beauty" />
                            <Picker.Item label="Fashion" value="fashion" />
                        </Picker>
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
        padding: 8
    },
    txtRecommend: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FEDBD0',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    txtButton: {
        fontFamily: 'Rubik-Medium',
        textAlign: 'center',
        paddingLeft: 10,
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
        width: SCREEN_WIDTH / 3,
        backgroundColor: '#ff7a89',
        padding: 15,
        borderColor: 'black',
        justifyContent: 'center',
        borderWidth: 0.2
    },
    btnNear: {
        flexDirection: 'row',
        width: SCREEN_WIDTH / 3,
        backgroundColor: '#FEDBD0',
        padding: 15,
        borderColor: 'black',
        justifyContent: 'center',
        borderWidth: 0.2
    },
    btnFilter: {
        flexDirection: 'row',
        width: SCREEN_WIDTH / 3,
        backgroundColor: '#FEEAE6',
        padding: 15,
        borderColor: 'black',
        justifyContent: 'center',
        borderWidth: 0.2
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
