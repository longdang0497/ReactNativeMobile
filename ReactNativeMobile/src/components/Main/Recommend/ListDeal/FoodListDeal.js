import {
    StyleSheet, Text, View, Image, Dimensions,
    TouchableOpacity, Animated, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchFoodDeal } from '../../../../redux/actions/RecommendAction';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FoodListDeal extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'FOOD'
    });

    constructor() {
        super();
        this.offsetDeal = 0;
        this.isOnFirstPage = true;
    }

    componentWillMount() {
        this.isOnFirstPage = true;
        this.props.fetchFoodDeal(this.offsetDeal);
    }

    loadMoreData() {
        this.isOnFirstPage = false;
        this.offsetDeal = this.offsetDeal + 10;
        this.props.fetchFoodDeal(this.offsetDeal);
    }

    loadLessData() {
        if (this.offsetDeal !== 0) {
            this.offsetDeal = this.offsetDeal - 10;
            this.props.fetchFoodDeal(this.offsetDeal);
            if (this.offsetDeal <= 0) {
                this.props.fetchFoodDeal(0);
                this.isOnFirstPage = true;
            }
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.props.isFetching && <Text>Loading...</Text>}
                    {this.props.MyItems && this.props.MyItems.map((item, id) => (
                        <TouchableOpacity
                            key={id}
                            onPress={() => this.props.navigation.navigate('InfoPage', { item })}
                        >
                            <Animated.View style={styles.cardHolder}>
                                <Image source={{ uri: item.avatar }} style={styles.imgRecommend} />
                                <View style={styles.txtRecommend}>
                                    <Text
                                        numberOfLines={3}
                                        style={styles.txtInfoRecommend}
                                    >{item.title}</Text>
                                </View>
                            </Animated.View>
                        </TouchableOpacity>
                    ))}
                </View>
                {this.props.MyItems[this.props.MyItems.length - 1] ?
                    <View style={styles.viewLoad}>
                        <TouchableOpacity
                            style={styles.btnLoad}
                            onPress={() => { this.loadLessData(); }}
                        >
                            <Text
                                style={!this.isOnFirstPage ? styles.txtLoadMore : styles.inactiveStyle}
                            >BACK</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#442C2E', width: 0.5 }} />
                        <TouchableOpacity
                            style={styles.btnLoad}
                            onPress={() => { this.loadMoreData(); }}
                        >
                            <Text style={styles.txtLoadMore}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    : null
                }
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
        justifyContent: 'space-around',
        backgroundColor: '#FEDBD0',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    txtInfoRecommend: {
        fontFamily: 'Rubik-Medium',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10
    },
    viewLoad: {
        height: SCREEN_HEIGHT * 0.06,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 30,
        margin: 10
    },
    btnLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inactiveStyle: {
        color: '#caa99f',
        fontFamily: 'Rubik-Medium'
    },
    txtLoadMore: {
        color: '#442C2E',
        fontFamily: 'Rubik-Medium'
    }
});

function mapStateToProps(state) {
    return {
        MyItems: state.fetchData.foodItems,
        isFetching: state.fetchData.isFetching,
    };
}

export default connect(mapStateToProps, { fetchFoodDeal })(FoodListDeal);
