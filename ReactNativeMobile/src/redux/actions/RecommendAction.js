import {
    FOOD_FETCH_FAIL,
    FASHION_FETCH_FAIL,
    BEAUTY_FETCH_FAIL,
    FOOD_FETCH_OK,
    FASHION_FETCH_OK,
    BEAUTY_FETCH_OK,
    FOOD_FETCHING,
    FASHION_FETCHING,
    BEAUTY_FETCHING
} from './type';

export const startFoodFetch = () => (
    {
        type: FOOD_FETCHING,
    }
);

export const fetchFoodSucceed = (data) => (
    {
        type: FOOD_FETCH_OK,
        payload: data
    }
);

export const fetchFoodFail = (error) => (
    {
        type: FOOD_FETCH_FAIL,
        payload: error
    }
);

export const startFashionFetch = () => (
    {
        type: FASHION_FETCHING,
    }
);

export const fetchFashionSucceed = (data) => (
    {
        type: FASHION_FETCH_OK,
        payload: data
    }
);

export const fetchFashionFail = (error) => (
    {
        type: FASHION_FETCH_FAIL,
        payload: error
    }
);

export const startBeautyFetch = () => (
    {
        type: BEAUTY_FETCHING,
    }
);

export const fetchBeautySucceed = (data) => (
    {
        type: BEAUTY_FETCH_OK,
        payload: data
    }
);

export const fetchBeautyFail = (error) => (
    {
        type: BEAUTY_FETCH_FAIL,
        payload: error
    }
);

export function fetchFoodDeal() {
    const URL = 'https://date-now.herokuapp.com/deals?provinceId=1&limit=20&sort=newest&termIds=1';
    return (dispatch) => {
        dispatch(startFoodFetch());
        return fetch(URL, { method: 'GET' })
            .then(handleErrors)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((responseJson) => {
                dispatch(fetchFoodSucceed(responseJson));
            })
            .catch(dispatch(fetchFoodFail()));            
    };
}

export function fetchBeautyDeal() {
    const URL = 'https://date-now.herokuapp.com/deals?provinceId=1&limit=20&sort=newest&termIds=2';
    return (dispatch) => {
        dispatch(startBeautyFetch());
        return fetch(URL, { method: 'GET' })
            .then(handleErrors)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((responseJson) => {
                dispatch(fetchBeautySucceed(responseJson));
            })
            .catch(dispatch(fetchBeautyFail()));            
    };
}

export function fetchFashionDeal() {
    const URL = 'https://date-now.herokuapp.com/deals?provinceId=1&limit=20&sort=newest&termIds=3';
    return (dispatch) => {
        dispatch(startFashionFetch());
        return fetch(URL, { method: 'GET' })
            .then(handleErrors)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((responseJson) => {
                dispatch(fetchFashionSucceed(responseJson));
            })
            .catch(dispatch(fetchFashionFail()));            
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
