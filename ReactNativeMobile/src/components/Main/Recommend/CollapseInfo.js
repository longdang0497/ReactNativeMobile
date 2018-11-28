import React, { Component } from 'react';
import {
  View, TouchableOpacity,
  Text, WebView,
  StyleSheet, ScrollView
} from 'react-native';
import ReadMore, { RegularText, BoldText } from 'react-native-read-more-text';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

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

// const SELECTORS = [
//   {
//     title: 'Nhấn để xem điều kiện áp dụng.',
//     value: 0,
//   }
// ];

// const CONTENT = [
//   {
//     title: 'htmlContent',
//     content: htmlContent,
//   }
// ];

export default class CollapseInfo extends Component {
  // state = {
  //   activeSections: [],
  //   collapsed: true,
  // };

  // setSections = sections => {
  //   this.setState({
  //     activeSections: sections.includes(undefined) ? [] : sections,
  //   });
  // };

  // toggleExpanded = () => {
  //   this.setState({ collapsed: !this.state.collapsed });
  // };

  _renderTruncatedFooter = (handlePress) => {
    return (
      <RegularText style={{ color: 'white', marginTop: 5 }} onPress={handlePress}>
        Read more
      </RegularText>
    );
  }

  _renderRevealedFooter = (handlePress) => {
    return (
      <RegularText style={{ color: 'gray', marginTop: 5 }} onPress={handlePress}>
        Show less
      </RegularText>
    );
  }

  // renderHeader = (section, _, isActive) => {
  //   return (
  //     <Animatable.View
  //       duration={400}
  //       style={[styles.header, isActive ? styles.active : styles.inactive]}
  //       transition="backgroundColor"
  //     >
  //       <Text style={styles.headerText}>{section.title}</Text>
  //     </Animatable.View>
  //   );
  // };

  // renderContent(section, _, isActive) {
  //   return (
  //     <Animatable.View
  //       duration={400}
  //       style={[styles.content, isActive ? styles.active : styles.inactive]}
  //       transition="backgroundColor"
  //     >
  //       <WebView
  //         source={{ html: section.content }}
  //         style={styles.content}
  //         automaticallyAdjustContentInsets={false}
  //         mixedContentMode='always'
  //       />
  //     </Animatable.View>
  //   );
  // }

  render() {
    //const { activeSections } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
          <View>
            <View style={styles.cardLabel}>
              <BoldText style={styles.cardLabelText}>
                Description
              </BoldText>
            </View>

            <View style={styles.card}>
              <View style={styles.cardBody}>
                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                >
                  <RegularText style={styles.cardText}>
                    <WebView
                      source={{ html: htmlContent }}
                      style={styles.content}
                      automaticallyAdjustContentInsets={false}
                      mixedContentMode='always'
                    />
                  </RegularText>
                </ReadMore>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
