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
    GETTING,
    GET_ID,
    GET_ADDRESS,
    GET_LOCATION,
    GET_FAIL,
    SEARCHING,
    SEARCH_FAIL,
    SEARCH_OK
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

export function fetchFoodDeal(offsetDeal) {
    const URL = 'https://date-now.herokuapp.com/deals?provinceId=1&offset=' + offsetDeal + '&limit=20&sort=newest&termIds=1';
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

export function fetchBeautyDeal(offsetDeal) {
    const URL = 'https://date-now.herokuapp.com/deals?provinceId=1&offset=' + offsetDeal + '&limit=20&sort=newest&termIds=2';
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

export function fetchFashionDeal(offsetDeal) {
    const URL = 'https://date-now.herokuapp.com/deals?provinceId=1&offset=' + offsetDeal + '&limit=20&sort=newest&termIds=3';
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

export const getting = () => (
    {
        type: GETTING,
    }
);

export const getID = (itemID) => (
    {
        type: GET_ID,
        payload: itemID
    }
);

export const getAddress = (itemAddress) => (
    {
        type: GET_ADDRESS,
        payload: itemAddress
    }
);

export const getLocation = (location) => (
    {
        type: GET_LOCATION,
        payload: location
    }
);

export const getFail = (error) => (
    {
        type: GET_FAIL,
        payload: error
    }
);

export function fetchID(itemID) {
    const URL = 'https://date-now.herokuapp.com/deals/' + itemID;
    return (dispatch) => {
        dispatch(getting());
        return fetch(URL, { method: 'GET' }, { headers: { 'Cache-Control': 'no-cache' } })
            .then(handleErrors)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((responseJson) => {
                //console.log("child: " + responseJson);
                dispatch(getID(responseJson));

            })
            .catch(dispatch(getFail()));
    };
}

export function fetchAddress(itemID) {
    const URL = 'https://date-now.herokuapp.com/deals/' + itemID + '/places';
    return (dispatch) => {
        dispatch(getting());
        return fetch(URL, { method: 'GET' })
            .then(handleErrors)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((responseJson) => {
                dispatch(getAddress(responseJson));
            })
            .catch(dispatch(getFail()));
    };
}

export function fetchLocation(itemID) {
    const URL = 'https://date-now.herokuapp.com/places/' + itemID;
    return (dispatch) => {
        dispatch(getting());
        return fetch(URL, { method: 'GET' })
            .then(handleErrors)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((responseJson) => {
                dispatch(getLocation(responseJson));

            })
            .catch(dispatch(getFail()));
    };
}

export const searching = () => (
    {
        type: SEARCHING,
    }
);

export const searchOK = (data) => (
    {
        type: SEARCH_OK,
        payload: data
    }
);

export const searchFail = (error) => (
    {
        type: SEARCH_FAIL,
        payload: error
    }
);

export function replaceString(string) {
    let str = '';
    str = string;
    str = encodeURIComponent(string, 'UTF-8');
    str = str.replace('%20', '+');
    str = str.trim();
    return str;
}

export function fetchSearch(strSearch) {
    let URL = '';
    //console.log('strSearch: ' + strSearch);
    if (strSearch !== '') {
        const str = replaceString(strSearch);
        //console.log(str);
        URL = 'https://date-now.herokuapp.com/places?name=' + str + '&offset=0&limit=10';
        //console.log(URL);
    }
    else if (strSearch === '') {
        URL = 'https://date-now.herokuapp.com/places?name=';
    }
    return (dispatch) => {
        dispatch(searching());
        return fetch(URL, { method: 'GET' }, { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' })
            .then(handleErrors)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((responseJson) => {
                //console.log(`responseJson: ${responseJson}`);
                dispatch(searchOK(responseJson));
            })
            .catch(dispatch(searchFail()));
    };
}

