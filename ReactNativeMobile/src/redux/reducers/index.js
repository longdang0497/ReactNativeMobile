import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    profile: ProfileReducer,
    user: UserReducer
});
