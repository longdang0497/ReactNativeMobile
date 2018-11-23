import {
    CHANGE_TITLE,
    CHANGE_BOTTOM_TEXT,
    CHANGE_BACKGROUND,
    CHANGE_BLUR
} from './type';

export const changeTitle = (_title) => (
    { 
        type: CHANGE_TITLE,
        title: _title 
    }
);

export const changeBottomText = (_bottomText) => (
    {
        type: CHANGE_BOTTOM_TEXT,
        bottomText: _bottomText
    }  
);

export const changeBackground = (_backgroundUri) => (
    {
        type: CHANGE_BACKGROUND,
        backgroundUri: _backgroundUri
    }
);

export const changeBlur = (_blur) => (
    {
        type: CHANGE_BLUR,
        blur: _blur
    }
);
