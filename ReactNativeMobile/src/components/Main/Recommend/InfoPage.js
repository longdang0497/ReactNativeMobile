import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import ImageCarousel from './ImageCarousel';
import DetailsRecommend from './DetailsRecommend';

//const SCREEN_WIDTH = Dimensions.get('window').width;

export default class InfoPage extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DCE2E5' }}>
                <ScrollView>
                    <View style={{ flex: 2, padding: 5 }}>
                        <ImageCarousel />
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <DetailsRecommend />
                    </View>

                </ScrollView>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnSaveDeal}>
                        <Text>Lưu ưu đãi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGetDeal}>
                        <Text>Lấy ưu đãi</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    // title: {
    //     fontWeight: 'bold',
    //     fontSize: 20
    // },
    // imageContainer: {
    //     width: SCREEN_WIDTH,
    //     height: SCREEN_WIDTH / 2
    // },
    // image: {
    //     alignSelf: 'stretch',
    //     width: SCREEN_WIDTH,
    //     height: SCREEN_WIDTH / 2
    // },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    btnGetDeal: {

        backgroundColor: 'red',
        padding: 15
    },
    btnSaveDeal: {
        backgroundColor: 'gray',
        padding: 15,
        borderColor: 'black',

    },
});

// <Carousel
//                         // other props
//                         scrollInterpolator={this.scrollInterpolator}
//                         slideInterpolatedStyle={this.animatedStyles}
//                         useScrollView={true}
//                     />


// scrollInterpolator(index, carouselProps) {
//     const range = [3, 2, 1, 0, -1]; // Remember that this has to be declared in a reverse order
//     const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
//     const outputRange = range;

//     return { inputRange, outputRange };
// }

// animatedStyles(index, animatedValue, carouselProps) {
//     const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
//     const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

//     return {
//         elevation: carouselProps.data.length - index,
//         opacity: animatedValue.interpolate({
//             inputRange: [2, 3],
//             outputRange: [1, 0]
//         }),
//         transform: [{
//             rotate: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2, 3],
//                 outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
//                 extrapolate: 'clamp'
//             })
//         }, {
//             [translateProp]: animatedValue.interpolate({
//                 inputRange: [-1, 0, 1, 2, 3],
//                 outputRange: [
//                     -sizeRef * 0.5,
//                     0,
//                     -sizeRef, // centered
//                     -sizeRef * 2, // centered
//                     -sizeRef * 3 // centered
//                 ],
//                 extrapolate: 'clamp'
//             })
//         }]
//     };
// }
