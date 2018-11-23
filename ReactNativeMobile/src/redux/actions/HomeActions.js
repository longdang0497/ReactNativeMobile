import {
    HIDE_HEADER,
    ENABLE_HEADER
} from './type';

export const hideHeader = () => (
    { 
        type: HIDE_HEADER
    }
);

export const enableHeader = () => (
    { 
        type: ENABLE_HEADER
    }
);
