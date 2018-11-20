import {
    StyleSheet, Text, View, FlatList, Image
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { initialState } from '../../../redux/reducers/RecommendReducer';


class ListDeal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.images}
                    renderItem={({ item }) => <Image source={item.src} style={styles.imgRecommend} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'yellow'
    },
    imgRecommend: {
        flex: 3,
        height: null,
        width: null,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        resizeMode: 'cover'
    },
});

function mapStateToProps(state) {
    return { images: state.images };
}

export default connect(mapStateToProps, null)(ListDeal);

// {initialState.images.map((image, index) => (
//     <TouchableOpacity
//         key={index}
//         onPress={() => this.props.navigation.navigate('InfoPage')}
//     >
//         <Animated.View style={style.cardHolder}>
//             <Image source={image.src} style={style.imgRecommend} />
//             <View style={style.txtRecommend}>
//                 <Text
//                     style={style.txtInfoRecommend}
//                 >THIS IS THE TITLE</Text>
//             </View>
//         </Animated.View>
//     </TouchableOpacity>
// ))}
