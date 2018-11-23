import {
    HIDE_HEADER,
    ENABLE_HEADER
} from '../actions/type.js';

const initialState = {
    enableHeader: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HIDE_HEADER:
            return {
                enableHeader: !state.enableHeader
            };
        case ENABLE_HEADER:
            return {
                enableHeader: true
            };
        default:
            return state;
    }
};
