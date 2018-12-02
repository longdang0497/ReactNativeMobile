import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import ProfileReducer from './ProfileReducer';
import UserReducer from './UserReducer';
import HomeReducer from './HomeReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
    profile: ProfileReducer,
    user: UserReducer,
    home: HomeReducer,
    fetchData: fetchReducer,
    search: SearchReducer,
});
