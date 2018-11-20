import {
    StyleSheet, Text, View, ScrollView,
    Image, Animated, TextInput, Picker,
    Dimensions, SafeAreaView, TouchableOpacity
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import React, { Component } from 'react';
import ListDeal from './ListDeal';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const FoodRoute = () => (
    //<ScrollView style={{ flex: 2 }}>
    <View style={[style.scene, { backgroundColor: '#ff4081' }]}>
        <ListDeal />
    </View>
    //</ScrollView>
);

const BeautyRoute = () => (
    //<ScrollView style={{ flex: 2 }}>
    <View style={[style.scene, { backgroundColor: '#673ab7' }]}>
        <ListDeal />
    </View>
    //</ScrollView>
);

const FashionRoute = () => (
    //<ScrollView style={{ flex: 2 }}>
    <View style={[style.scene, { backgroundColor: '#ff4081' }]}>
        <ListDeal />
    </View>
    //</ScrollView>

);

export default class Recommend extends Component {
    static navigationOptions = {
        headerTitle: (
            <TextInput
                inlineImageLeft='ic_search'
                style={{
                    height: SCREEN_HEIGHT / 12.4,
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

    tabState = {
        index: 0,
        routes: [
            { key: 'food', title: 'FOOD' },
            { key: 'beauty', title: 'BEAUTY' },
            { key: 'fashion', title: 'FASHION' },
        ],
    };

    renderTab = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={style.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? '#442C2E' : '#caa99f')
                        ),
                    });
                    return (
                        <TouchableOpacity
                            style={style.tabItem}
                            onPress={() => this.setState({ index: i })}
                        >
                            <Animated.Text
                                style={{ color, fontWeight: 'bold', fontFamily: 'Rubik-Medium' }}
                            >{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    render() {
        return (
            /* eslint-disable global-require */
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <TabView
                    navigationState={this.tabState}
                    renderScene={SceneMap({
                        food: FoodRoute,
                        beauty: BeautyRoute,
                        fashion: FashionRoute
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: SCREEN_WIDTH }}
                    renderTabBar={this.renderTab}
                    //canJumpToTab={route => route.disabled}
                />
            </SafeAreaView>
            /* eslint-enable global-require */
        );
    }
}

const style = StyleSheet.create({
    recommendContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tabBar: {
        flexDirection: 'row',
        //paddingTop: 10,
        backgroundColor: '#FEDBD0'
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
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


// <View style={style.recommendContainer}>
                    // </View>
// <View style={style.btnContainer}>
// <TouchableOpacity style={style.btnNew}>
//  
//                             <Image
//                                 source={require('../../../../assets/appicon/ic_new.png')}
//                                 style={style.imgIcon}
//                             />
//                             <Text style={style.txtButton}>Latest</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={style.btnNear}>
//                             <Image
//                                 source={require('../../../../assets/appicon/ic_near.png')}
//                                 style={style.imgIcon}
//                             />
//                             <Text style={style.txtButton}>Nearby</Text>
//                         </TouchableOpacity>
//                         <Picker
//                             style={style.btnFilter}
//                             selectedValue={this.state.PickerValue}
//                             textStyle={style.txtButton}
//                             itemTextStyle={style.txtButton}
//                             onValueChange={(itemValue, itemIndex) =>
//                                 this.setState({ PickerValue: itemValue })}
//                         >
//                             <Picker.Item label="Category" value="" />
//                             <Picker.Item label="Food" value="food" />
//                             <Picker.Item label="Beauty" value="beauty" />
//                             <Picker.Item label="Fashion" value="fashion" />
//                         </Picker>
//                     </View>