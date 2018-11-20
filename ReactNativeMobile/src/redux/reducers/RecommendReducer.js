import {
    CHANGE_TITLE,
    CHANGE_BOTTOM_TEXT,
    CHANGE_BACKGROUND,
    CHANGE_BLUR
} from '../actions/type.js';

/* eslint-disable global-require */
export const initialState = {
    images: [
        { id: 1, src: require('../../../assets/background/photo-1.jpg') },
        { id: 2, src: require('../../../assets/background/photo-2.jpg') },
        { id: 4, src: require('../../../assets/background/photo-4.jpg') },
        { id: 5, src: require('../../../assets/background/photo-5.jpg') },
        { id: 6, src: require('../../../assets/background/photo-6.jpg') },
        { id: 7, src: require('../../../assets/background/photo-7.jpg') },
        { id: 8, src: require('../../../assets/background/photo-8.jpg') },
        { id: 9, src: require('../../../assets/background/photo-9.jpg') },
        { id: 10, src: require('../../../assets/background/photo-10.jpg') }
    ],
    categoryDeal: 'SHOW_ALL'
};
/* eslint-enable global-require */

export default (state = initialState, action) => {
    // switch (action.type) {
    //     case CHANGE_TITLE:
    //         return {
    //             ...state,
    //             titleText: action.title
    //         };
    //     case CHANGE_BOTTOM_TEXT:
    //         return {
    //             ...state,
    //             bottomText: action.bottomText
    //         };
    //     case CHANGE_BACKGROUND:
    //         return {
    //             ...state,
    //             imageSource: action.backgroundUri
    //         };
    //     case CHANGE_BLUR:
    //         return {
    //             ...state,
    //             backgroundBlur: action.blur
    //         };
    //     default:
    //         return state;
    // }
    return state;
};
