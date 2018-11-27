import {
    CHANGE_TITLE,
    CHANGE_BOTTOM_TEXT,
    CHANGE_BACKGROUND,
    CHANGE_BLUR,
    IS_DAYS,
    SET_IS_DAYS,
    IS_START_FROM_ZERO,
    SET_IS_START_FROM_ZERO
} from '../actions/type.js';
import defaultBackground from '../../media/backgound_default.jpg';

const initialState = {
    imageSource: defaultBackground,
    titleText: 'Been Together',
    bottomText: 'Today',
    backgroundBlur: 1,
    isStartZero: false,
    isDayMonthYear: true
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
        case IS_DAYS:
            return {
                ...state,
                isDayMonthYear: !state.isDayMonthYear
            };
        case SET_IS_DAYS:
            return {
                ...state,
                isDayMonthYear: action.set
            };
        case IS_START_FROM_ZERO:
            return {
                ...state,
                isStartZero: !state.isStartZero
            };
        case SET_IS_START_FROM_ZERO:
            return {
                ...state,
                isStartZero: action.set
            };
        default:
            return state;
    }
};
