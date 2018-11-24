import React, { Component } from 'react';
import {
    View, Dimensions,
    Text, Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import DetailsRecommend from './DetailsRecommend';
import CollapseInfo from './CollapseInfo';
import ShareInfo from './ShareInfo';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class InfoPage extends Component {
    static navigationOptions = {
        headerTitle: (
            <Text
                style={{
                    fontFamily: 'Rubik-Medium',
                    fontWeight: 'bold',
                    color: '#442C2E',
                    justifyContent: 'center'
                }}
            >THIS IS DEAL'S TITLE</Text>
        ),
        /* eslint-disable global-require */
        //headerRight: (),
        /* eslint-enable global-require */
    }

    render() {
        return (
            /* eslint-disable global-require */
            <View style={{ flex: 1, backgroundColor: '#DCE2E5' }}>
                <ScrollView>
                    <View style={{ flex: 1, padding: 5 }}>
                        <Image style={styles.imgDeal} />
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <View style={{ flex: 1 }}>
                            <DetailsRecommend />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                padding: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#F0EDE5',
                            }}
                        >
                            <TouchableOpacity
                                style={styles.btnDirection}
                                onPress={() => this.props.navigation.navigate('ShowMaps')}
                            >
                                <Text>CHỈ ĐƯỜNG</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <CollapseInfo />
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <ShareInfo />
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btnSaveDeal}>
                            <Image
                                source={require('../../../../assets/appicon/ic_heart.png')}
                                style={styles.imgIcon}
                            />
                            <Text style={{ textAlign: 'center', paddingLeft: 20 }}>Lưu ưu đãi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btnGetDeal}>
                            <Image
                                source={require('../../../../assets/appicon/ic_get.png')}
                                style={styles.imgIcon}
                            />
                            <Text
                                style={{ textAlign: 'center', color: 'white', paddingLeft: 20 }}
                            >Lấy ưu đãi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            /* eslint-enable global-require */
        );
    }
}

const styles = StyleSheet.create({
    addressContainer: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    btnGetDeal: {
        width: SCREEN_WIDTH / 2,
        backgroundColor: '#E94B3C',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnSaveDeal: {
        flexDirection: 'row',
        width: SCREEN_WIDTH / 2,
        backgroundColor: '#F0EDE5',
        padding: 15,
        borderColor: 'black',
        justifyContent: 'center'
    },
    btnDirection: {
        flexDirection: 'row',
        width: SCREEN_WIDTH,
        backgroundColor: '#F0EDE5',
        padding: 15,
        borderColor: 'black',
        justifyContent: 'center'
    },
    imgIcon: {
        width: 20,
        height: 20,
        paddingRight: 20
    },
    imgDeal: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH / 2,
        borderWidth: 0.5,
        backgroundColor: 'black',
    }
});
