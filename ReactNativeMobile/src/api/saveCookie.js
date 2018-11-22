import { AsyncStorage } from 'react-native';
import constants from '../components/Main/Constants';

const saveCookie = async (cookie) => {
    try {
        await AsyncStorage.setItem(constants.STORAGE_KEY.COOKIE, cookie);
        console.log(cookie);
    } catch (error) {
        // Error saving data
    }
};

export default saveCookie;
