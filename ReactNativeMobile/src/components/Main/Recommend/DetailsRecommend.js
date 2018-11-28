// import React, { Component } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet, Picker
// } from 'react-native';
// import { connect } from 'react-redux';
// import { fetchAddress } from '../../../redux/actions/RecommendAction';

// class DetailsRecommend extends Component {
//     constructor() {
//         super();
//         this.state = {
//             PickerValue: ''
//         };
//     }

//     componentDidMount() {
//         this.props.fetchAddress(this.props.idDeal);
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.textBtn}>{this.props.logo}</Text>
//                 <Picker
//                     style={{ width: '80%' }}
//                     selectedValue={this.state.PickerValue}
//                     onValueChange={(itemValue, itemIndex) =>
//                         this.setState({ PickerValue: itemValue })}
//                 >
//                     <Picker.Item label="Select a option" value="" />
//                     {this.props.MyItems && this.props.MyItems.map((item) => (                        
//                         <Picker.Item key={item.id} label={item.address} value="" />
//                     ))}
//                 </Picker>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     textBtn: {
//         fontFamily: 'Rubik-Bold',
//         textAlign: 'center',
//         padding: 10,
//         fontSize: 25
//     }
// });

// function mapStateToProps(state) {
//     return {
//         MyItems: state.fetchData.itemsAddress,
//         isFetching: state.fetchData.isFetching,
//     };
// }

// export default connect(mapStateToProps, { fetchAddress })(DetailsRecommend);
