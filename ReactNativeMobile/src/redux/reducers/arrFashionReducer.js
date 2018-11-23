/* eslint-disable global-require */
const arrFashionDeal = [
    { id: 1, src: require('../../../assets/background/photo-1.jpg') },
    { id: 2, src: require('../../../assets/background/photo-2.jpg') },
    { id: 4, src: require('../../../assets/background/photo-4.jpg') },
    { id: 5, src: require('../../../assets/background/photo-5.jpg') },
    { id: 6, src: require('../../../assets/background/photo-6.jpg') },
    { id: 7, src: require('../../../assets/background/photo-7.jpg') },
    { id: 8, src: require('../../../assets/background/photo-8.jpg') },
    { id: 9, src: require('../../../assets/background/photo-9.jpg') },
    { id: 10, src: require('../../../assets/background/photo-10.jpg') }
];
/* eslint-enable global-require */

const arrFashionReducer = (state = arrFashionDeal, action) => {
        return state;
};

export default arrFashionReducer;
