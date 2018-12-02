import {
    GETTING,
    GET_LOCATION,
    GET_FAIL,
    SEARCHING,
    SEARCH_FAIL,
    SEARCH_OK
} from './type';

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

