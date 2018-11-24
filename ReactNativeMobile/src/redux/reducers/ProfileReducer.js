import {
    CHANGE_TITLE,
    CHANGE_BOTTOM_TEXT,
    CHANGE_BACKGROUND,
    CHANGE_BLUR
} from '../actions/type.js';
import defaultBackground from '../../media/backgound_default.jpg';

const initialState = {
    imageSource: defaultBackground,
    titleText: 'Been Together',
    bottomText: 'Today',
    backgroundBlur: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                ...state,
                titleText: action.title
            };
        case CHANGE_BOTTOM_TEXT:
            return {
                ...state,
                bottomText: action.bottomText
            };
        case CHANGE_BACKGROUND:
            return {
                ...state,
                imageSource: action.backgroundUri
            };
        case CHANGE_BLUR:
            return {
                ...state,
                backgroundBlur: action.blur
            };
        default:
            return state;
    }
};
