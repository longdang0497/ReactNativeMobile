import {
    StyleSheet, Text, View, TextInput, Dimensions,
    TouchableOpacity, ScrollView, Animated, Image, RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { ProgressDialog } from 'react-native-simple-dialogs';
import { fetchSearch, fetchLocation, setNullLocation } from '../../../redux/actions/SearchAction';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ListSearch extends Component {
    constructor() {
        super();
        this.offsetDeal = 0;
        this.isOnFirstPage = true;
        this.state = {
            text: '',
            isPressSearch: false,
            refreshing: false,
            inProgress: false
        };
    }

    onSearch() {
        this.setState({ isPressSearch: true });
        this.props.fetchSearch(this.state.text, this.offsetDeal);
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.props.fetchSearch(this.state.text, this.offsetDeal);
        this.setState({ refreshing: false });
    }

    loadMoreData() {
        if (this.state.text !== '') {
            this.isOnFirstPage = false;
            this.offsetDeal = this.offsetDeal + 10;
            this.props.fetchSearch(this.state.text, this.offsetDeal);
            if (this.isOnLastPage === true) {
                const lastPage = this.offsetDeal;
                this.props.fetchSearch(this.state.text, lastPage);
            }
        }
    }

    loadLessData() {
        if (this.offsetDeal !== 0 && this.state.text !== '') {
            this.offsetDeal = this.offsetDeal - 10;
            this.props.fetchSearch(this.state.text, this.offsetDeal);
            if (this.offsetDeal <= 0) {
                this.props.fetchSearch(this.state.text, 0);
                this.isOnFirstPage = true;
            }
        }
    }

    onItemPress(item) {
        this.setState({ inProgress: true });
        this.props.fetchLocation(item.id);
        setTimeout(() => {
            this.setState({ inProgress: false });
            if (this.props.location) {
                const tempLocation = this.props.location;
                this.props.setNullLocation();
                this.setState({ inProgress: false });
                this.props.navigation.navigate('ShowMaps', { item: tempLocation });
            }
        }
        , 2000);
    }

    renderSearchNull() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>0 result</Text>
            </View>
        );
    }

    render() { 
        //console.log(`search: ${this.props.dataSearch}`);
        //console.log(this.props.dataSearch);
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
                <View style={{ flex: 1, flexWrap: 'wrap', backgroundColor: '#FEDBD0' }}>
                    <TextInput
                        inlineImageLeft='ic_search'
                        inlineImagePadding={40}
                        style={{
                            height: SCREEN_HEIGHT / 11.4,
                            width: SCREEN_WIDTH,
                            backgroundColor: '#fff',
                            paddingLeft: 15,
                            paddingTop: 16,
                            paddingBottom: 16,
                            justifyContent: 'space-between'
                        }}
                        placeholder="What are you looking for?"
                        placeholderTextColor='#442C2E'
                        onChangeText={(value) => { this.setState({ text: value }); }}
                    />
                    <TouchableOpacity
                        style={styles.btnSearch}
                        onPress={() => this.onSearch()}
                    >
                        <Text style={styles.txtSearch}>SEARCH</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    {(this.state.isPressSearch === true && this.props.dataSearch !== null)
                        ? this.props.dataSearch && this.props.dataSearch.map((item, id) => (
                            <TouchableOpacity
                                key={id}
                                onPress={() => this.onItemPress(item)}
                            >
                                <Animated.View style={styles.cardHolder}>
                                    <Image source={{ uri: item.avatar }} style={styles.imgRecommend} />
                                    <View style={styles.txtRecommend}>
                                        <Text
                                            numberOfLines={1}
                                            style={styles.txtInfoName}
                                        >{item.name}</Text>
                                        <Text
                                            numberOfLines={2}
                                            style={styles.txtInfoAddress}
                                        >{item.address}</Text>
                                    </View>
                                </Animated.View>
                            </TouchableOpacity>
                        )) : this.renderSearchNull()}
                </View>
                {(this.state.isPressSearch === true && this.props.dataSearch !== null && this.props.dataSearch[this.props.dataSearch.length - 1]) ?
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
                            onPress={() => { this.props.dataSearch.length >= 10 ? this.loadMoreData() : null; }}
                        >
                            <Text
                                style={this.props.dataSearch.length >= 10 ? styles.txtLoadMore : styles.inactiveStyle}
                            >NEXT</Text>
                        </TouchableOpacity>
                    </View>
                    : null
                }
                <ProgressDialog
                    visible={this.state.inProgress}
                    title="Loading"
                    message="Please, wait..."
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //height: SCREEN_HEIGHT / 12,
        flexWrap: 'wrap',
        width: SCREEN_WIDTH,
    },
    cardHolder: {
        height: SCREEN_WIDTH - 100,
        width: SCREEN_WIDTH,
        padding: 8,
    },
    imgRecommend: {
        flex: 3,
        height: null,
        width: null,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover'
    },
    txtSearch: {
        fontFamily: 'Rubik-Medium',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    txtRecommend: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    txtInfoName: {
        fontFamily: 'Rubik-Medium',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10,
        paddingBottom: 5
    },
    txtInfoAddress: {
        fontFamily: 'Rubik-Regular',
        fontStyle: 'italic',
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 5
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
    btnSearch: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#442C2E',
        backgroundColor: '#FEDBD0',
        height: SCREEN_HEIGHT / 12,
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
        location: state.search.location,
        dataSearch: state.search.dataSearch,
        isFetching: state.search.isFetching,
    };
}

export default connect(mapStateToProps, { fetchSearch, fetchLocation, setNullLocation })(ListSearch);


// {(this.props.dataSearch[this.props.dataSearch.length - 1]) ?
                    //     <View style={styles.viewLoad}>
                    //         <TouchableOpacity
                    //             style={styles.btnLoad}
                    //             onPress={() => { this.loadLessData(); }}
                    //         >
                    //             <Text
                    //                 style={!this.isOnFirstPage ? styles.txtLoadMore : styles.inactiveStyle}
                    //             >BACK</Text>
                    //         </TouchableOpacity>
                    //         <View style={{ backgroundColor: '#442C2E', width: 0.5 }} />
                    //         <TouchableOpacity
                    //             style={styles.btnLoad}
                    //             onPress={() => { this.loadMoreData(); }}
                    //         >
                    //             <Text style={styles.txtLoadMore}>NEXT</Text>
                    //         </TouchableOpacity>
                    //     </View>
                    //     : null
                    // }
