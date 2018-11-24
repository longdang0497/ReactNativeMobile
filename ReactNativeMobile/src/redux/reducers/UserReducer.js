import {
    ADD_USER,
    CHECK_TOKEN
} from '../actions/type.js';

const initialState = {
    user: {},
    isSigned: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.user
            };
        case CHECK_TOKEN:
            return {
                ...state,
                isSigned: action.isSigned
            };
        default:
            return state;
    }
};
