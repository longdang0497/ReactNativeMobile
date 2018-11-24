import React, { Component } from 'react';
import {
    Alert, StyleSheet,
    Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ImageCarousel extends Component {
    constructor(props) {
        super();
        this.state = {
            errors: []
        };
        this.props = props;
        this._carousel = {};
        this.init();
    }

    onPress() {
        Alert.alert('Hi');
    }

    init() {
        this.state = {
            /* eslint-disable global-require */
            images: [
                { id: 1, src: require('../../../../assets/background/photo-1.jpg') },
                { id: 2, src: require('../../../../assets/background/photo-2.jpg') },
                { id: 4, src: require('../../../../assets/background/photo-4.jpg') },
                { id: 5, src: require('../../../../assets/background/photo-5.jpg') },
                { id: 6, src: require('../../../../assets/background/photo-6.jpg') },
                { id: 7, src: require('../../../../assets/background/photo-7.jpg') },
                { id: 8, src: require('../../../../assets/background/photo-8.jpg') },
                { id: 9, src: require('../../../../assets/background/photo-9.jpg') },
                { id: 10, src: require('../../../../assets/background/photo-10.jpg') }
            ]
            /* eslint-enable global-require */
        };

        //console.log('ThumbnailCarousel Props: ', this.props);
    }

    handleSnapToItem(index) {
        console.log('snapped to ', index);
    }

    _renderItem = ({ item, index }) => {
        return (
            <ThumbnailBackgroundView>
                <CurrentVideoTO
                    onPress={() => {
                        this._carousel.snapToItem(index);
                    }}
                >
                    <CurrentVideoImage source={item.src} />
                </CurrentVideoTO>
                
            </ThumbnailBackgroundView>
        );
    }

    render() {    
        return (
          <CarouselBackgroundView>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.images}
              renderItem={this._renderItem.bind(this)}
              onSnapToItem={this.handleSnapToItem.bind(this)}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              layout={'default'}
              firstItem={0}
            />
          </CarouselBackgroundView>
        );
      }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});

const CurrentVideoImage = styled.Image`
  top: 25;
  box-shadow: 5px 10px;
  width: 100%;
  height: 250;
  border-radius: 10;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%; 
`;

const CurrentVideoTO = styled.TouchableOpacity`
`;
const CarouselBackgroundView = styled.View`
  background-color: gray;
  height: 100%;
  width: 100%;
  color: white;
  border: 2px solid;
`;
