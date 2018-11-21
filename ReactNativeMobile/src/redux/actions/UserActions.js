import {
    ADD_USER,
    CHECK_TOKEN
} from './type';

export const addUser = (_user) => (
    { 
        type: ADD_USER,
        user: _user 
    }
);

export const isSigned = (_isSigned) => (
    { 
        type: CHECK_TOKEN,
        isSigned: _isSigned 
    }
);
