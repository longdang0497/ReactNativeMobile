import {
    StyleSheet, Text, View, Image, Dimensions,
    TouchableOpacity, Animated, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;

class FashionListDeal extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'FOOD'
    });

    getFashionImg() {
        const { myFashionImg } = this.props;
        return myFashionImg;
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.getFashionImg().map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => this.props.navigation.navigate('InfoPage')}
                        >
                            <Animated.View style={styles.cardHolder}>
                                <Image source={item.src} style={styles.imgRecommend} />
                                <View style={styles.txtRecommend}>
                                    <Text
                                        style={styles.txtInfoRecommend}
                                    >THIS IS THE TITLE</Text>
                                </View>
                            </Animated.View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH,
    },
    cardHolder: {
        height: SCREEN_WIDTH / 2,
        width: SCREEN_WIDTH / 2,
        padding: 8
    },
    imgRecommend: {
        flex: 3,
        height: null,
        width: null,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover'
    },
    txtRecommend: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FEDBD0',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    txtInfoRecommend: {
        fontFamily: 'Rubik-Medium',
        fontWeight: 'bold',
        fontSize: 20
    }
});

function mapStateToProps(state) {
    return {
        myFashionImg: state.imgFashion,
    };
}

export default connect(mapStateToProps, null)(FashionListDeal);
