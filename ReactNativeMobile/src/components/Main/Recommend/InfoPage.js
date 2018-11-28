import React, { Component } from 'react';
import {
    View, Dimensions,
    Text, Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';
import { fetchID } from '../../../redux/actions/RecommendAction';
import DetailsRecommend from './DetailsRecommend';
//import CollapseInfo from './CollapseInfo';
import ShareInfo from './ShareInfo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const htmlContent = `
<p><strong>Thời gian áp dụng:</strong></p>
<ul>
  <li>Từ ngày 27/11/2018 đến 1/2/2019</li>
  <li>Khung giờ: 8:00 - 23:00</li>
</ul>
<p><strong>Nội dung:</strong></p>
<p><strong>GIẢM 30% TỔNG HOÁ ĐƠN</strong></p>
<p>Áp dụng cho:</p>
<ul>
  <li>Tổng giờ xem phim tại quán</li>
  <li>Cho toàn Menu</li>
  <li>Không áp dụng dịch vụ tổ chức tiệc</li>
</ul>
<p><strong>Giá trị ưu đãi:</strong></p>
<ul>
  <li>Giá đã giảm: 98K</li>
  <li>Giá gốc: 140K</li>
  <li>Tỷ lệ giảm: 30%</li>
</ul>
<p><strong>Lưu ý:</strong></p>
<p><strong>Mỗi người được dùng:</strong></p>
<ul>
  <li>Không giới hạn trong suốt chương trình</li>
  <li>1 thiết bị chứa mã</li>
</ul>
<p><strong>Mỗi mã chỉ:</strong></p>
<ul>
  <li>Dùng 1 lần khi thanh toán</li>
  <li>Dùng cho 1 hoá đơn</li>
</ul>
<p>----</p>
<p><em>Áp dụng tại cửa hàng</em></p>
<p><em>Nhớ xuất trình mã ưu đãi trước khi sử dụng dịch vụ</em></p>
<p><em>Chỉ áp dụng trong khoảng thời gian sẽ hẹn đến </em></p>
<p><em>Khi thanh toán chỉ áp dụng duy nhất 1 mã</em></p>
<p>----</p>
<p><em>Không áp dụng hình chụp màn hình     </em></p>
<p><em>Không áp dụng chung với các chương trình khuyến mại khác</em></p>
<p><em>Ngày không áp dụng:</em></p>
<ul>
  <li><em>23/12 , 24/12, 25/12, 1/1/2019</em></li>
</ul>
<p><strong>Hotline:</strong></p>
<ul>
  <li>3D Box Cineme: <a href="tel:0902559022" target="_blank" style="color: rgb(230, 0, 0);">0902 559 022</a></li>
  <li>Meete HCM: <a href="tel:0917247744" target="_blank">0917 247 744</a></li>
</ul>
`;

class InfoPage extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'none');
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
                            <DetailsRecommend logo={item.logo} />
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
                        <ScrollView>
                            <WebView
                                source={{ html: htmlContent }}
                                style={styles.content}
                                automaticallyAdjustContentInsets={true}
                                mixedContentMode='always'                                
                            />
                        </ScrollView>
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
        isFetching: state.fetchData.isFetching,
    };
}

export default connect(mapStateToProps, { fetchID })(InfoPage);
