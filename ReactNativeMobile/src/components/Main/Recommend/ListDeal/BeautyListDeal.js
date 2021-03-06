import {
    StyleSheet, Text, View, Image, Dimensions,
    TouchableOpacity, Animated, ScrollView, RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchBeautyDeal } from '../../../../redux/actions/RecommendAction';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class BeautyListDeal extends Component {
    static navigationOptions = ({ navigation }) => ({
        tabBarLabel: 'BEAUTY'
    });

    constructor() {
        super();
        this.offsetDeal = 0;
        this.isOnFirstPage = true;
        this.state = {
            refreshing: false,
        };
    }

    componentWillMount() {
        this.isOnFirstPage = true;
        this.props.fetchBeautyDeal(this.offsetDeal);
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.props.fetchBeautyDeal(this.offsetDeal);
        this.setState({ refreshing: false });
    }

    loadMoreData() {
        this.isOnFirstPage = false;
        this.offsetDeal = this.offsetDeal + 10;
        this.props.fetchBeautyDeal(this.offsetDeal);
        if (this.isOnLastPage === true) {
            const lastPage = this.offsetDeal;
            this.props.fetchBeautyDeal(lastPage);
        }
    }

    loadLessData() {
        if (this.offsetDeal !== 0) {
            this.offsetDeal = this.offsetDeal - 10;
            this.props.fetchBeautyDeal(this.offsetDeal);
            if (this.offsetDeal <= 0) {
                this.props.fetchBeautyDeal(0);
                this.isOnFirstPage = true;
            }
        }
    }

    render() {
        return (
            <ScrollView
                style={{ backgroundColor: '#FEDBD0' }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                        progressBackgroundColor='white'
                    />
                }
            >
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
                            onPress={() => { this.props.MyItems.length >= 10 ? this.loadMoreData() : null; }}
                        >
                            <Text
                                style={this.props.MyItems.length >= 10 ? styles.txtLoadMore : styles.inactiveStyle}
                            >NEXT</Text>
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
        backgroundColor: 'white',
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
        MyItems: state.fetchData.beautyItems,
        isFetching: state.fetchData.isFetching,
    };
}

export default connect(mapStateToProps, { fetchBeautyDeal })(BeautyListDeal);
