import React, { Component } from 'react';
import {
    View, Dimensions,
    Text, Image,
    StyleSheet, Picker,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { fetchID, fetchAddress } from '../../../redux/actions/RecommendAction';
import ShareInfo from './ShareInfo';

const SCREEN_WIDTH = Dimensions.get('window').width;

class InfoPage extends Component {
    static navigationOptions = {
        header: null
    }

    constructor() {
        super();
        this.state = {
            PickerValue: ''
        };
    }

    componentWillMount() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        this.props.fetchID(item.id);
        this.props.fetchAddress(item.id);
    }

    render() {
        const { navigation, itemAddress } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        return (
            /* eslint-disable global-require */
            <View style={{ flex: 1, backgroundColor: '#DCE2E5' }}>
                <ScrollView>
                    <View style={{ flex: 1, padding: 5 }}>
                        <Image
                            style={styles.imgDeal}
                            source={{ uri: item.avatar }}
                        />
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.container}>
                                <Text style={styles.txtLogo}>{item.logo}</Text>
                                <Picker
                                    style={{ width: '80%' }}
                                    selectedValue={this.state.PickerValue}
                                    onValueChange={(itemValue) =>
                                        this.setState({ PickerValue: itemValue })}
                                >
                                    <Picker.Item label="Select a option" value="" />
                                    {(itemAddress) ? itemAddress.places.map(
                                        (obj) => <Picker.Item
                                            key={obj.id}
                                            label={obj.address + ', ' + obj.districtName}
                                            value={obj.address + obj.districtName}
                                        />
                                    ) : []}
                                </Picker>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                padding: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                            }}
                        >
                            <TouchableOpacity
                                style={styles.btnDirection}
                                onPress={() => this.props.navigation.navigate('ShowMaps', { item })}
                            >
                                <Text style={{ fontFamily: 'Rubik-Medium', fontSize: 15, color: '#442C2E' }}>SHOW DIRECTION</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <ScrollView>
                            <WebView
                                source={{ html: this.props.MyItems.body }}
                                style={styles.content}
                                automaticallyAdjustContentInsets={true}
                                mixedContentMode='always'
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
                <View style={styles.btnContainer}>
                    <ShareInfo linkID={item.id} linkTitle={item.title} />
                </View>
            </View>
            /* eslint-enable global-require */
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    txtLogo: {
        fontFamily: 'Rubik-Bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 30
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
        width: SCREEN_WIDTH - 20,
        backgroundColor: '#F0EDE5',
        padding: 15,
        borderColor: '#442C2E',
        borderRadius: 20,
        borderWidth: 0.5,
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
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 2,
        flexWrap: 'wrap',
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * 3
    },
});

function mapStateToProps(state) {
    return {
        MyItems: state.fetchData.itemsID,
        itemAddress: state.fetchData.itemsAddress,
        isFetching: state.fetchData.isFetching,
    };
}

export default connect(mapStateToProps, { fetchID, fetchAddress })(InfoPage);
