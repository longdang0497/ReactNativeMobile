import {
    FOOD_FETCH_FAIL,
    FASHION_FETCH_FAIL,
    BEAUTY_FETCH_FAIL,
    FOOD_FETCH_OK,
    FASHION_FETCH_OK,
    BEAUTY_FETCH_OK,
    FOOD_FETCHING,
    FASHION_FETCHING,
    BEAUTY_FETCHING,
    GET_ID,
    GET_FAIL,
} from '../actions/type';

const initialState = {
    foodItems: [],
    beautyItems: [],
    fashionItems: [],
    itemsID: [],
    dataFetched: false,
    isFetching: false,
    fetchError: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FOOD_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case FASHION_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case BEAUTY_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case FOOD_FETCH_FAIL:
            return {
                ...state,
                foodItems: [],
                isFetching: false,
                fetchError: action.payload
            };
        case FASHION_FETCH_FAIL:
            return {
                ...state,
                fashionItems: [],
                isFetching: false,
                fetchError: action.payload
            };
        case BEAUTY_FETCH_FAIL:
            return {
                ...state,
                beautyItems: [],
                isFetching: false,
                fetchError: action.payload
            };
        case FOOD_FETCH_OK:
            return {
                ...state,
                foodItems: action.payload,
                isFetching: false
            };
        case FASHION_FETCH_OK:
            return {
                ...state,
                fashionItems: action.payload,
                isFetching: false
            };
        case BEAUTY_FETCH_OK:
            return {
                ...state,
                beautyItems: action.payload,
                isFetching: false
            };
        case GET_ID:
            return {
                ...state,
                itemsID: action.payload,
                isFetching: false
            };
        case GET_FAIL:
            return {
                ...state,
                itemsID: [],
                isFetching: false,
                fetchError: action.payload
            };
        default:
            return state;
    }
};

