import { combineReducers } from 'redux';
import arrFoodReducer from './arrFoodReducer';
import arrFashionReducer from './arrFashionReducer';
import arrBeautyReducer from './arrBeautyReducer';

export default combineReducers({
    imgFood: arrFoodReducer,
    imgBeauty: arrBeautyReducer,
    imgFashion: arrFashionReducer
});
