import {
    GETTING,
    GET_LOCATION,
    GET_FAIL,
    SEARCHING,
    SEARCH_FAIL,
    SEARCH_OK
} from '../actions/type';

const initialState = {
    location: null,
    dataFetched: false,
    isFetching: false,
    fetchError: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GETTING:
            return {
                ...state,
                isFetching: true
            };
        case GET_LOCATION:
            return {
                ...state,
                location: action.payload,
                isFetching: false
            };
        case GET_FAIL:
            return {
                ...state,
                location: [],
                isFetching: false,
                fetchError: action.payload
            };
            case SEARCHING:
            return {
                ...state,
                isFetching: true
            };
        case SEARCH_OK:
            return {
                ...state,
                dataSearch: action.payload,
                isFetching: false
            };
        case SEARCH_FAIL:
            return {
                ...state,
                dataSearch: [],
                isFetching: false,
                fetchError: action.payload
            };
        default:
            return state;
    }
};

