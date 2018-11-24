import {
    StyleSheet, Text, View, Image, Dimensions,
    TouchableOpacity, Animated, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchFoodDeal } from '../../../../redux/actions/RecommendAction';

const SCREEN_WIDTH = Dimensions.get('window').width;

class FoodListDeal extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'FOOD'
    });

    componentDidMount() {
        console.log(this.props.fetchFoodDeal());
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.props.isFetching && <Text>Loading...</Text>}
                    {this.props.MyItems && this.props.MyItems.map((item, id) => (
                        <TouchableOpacity
                            key={id}
                            onPress={() => this.props.navigation.navigate('InfoPage')}
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
    }
});

function mapStateToProps(state) {
    return {
        MyItems: state.fetchData.foodItems,
        isFetching: state.fetchData.isFetching,
    };
}

export default connect(mapStateToProps, { fetchFoodDeal })(FoodListDeal);
