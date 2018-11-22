import { AsyncStorage } from 'react-native';
import constants from '../components/Main/Constants';

const getCookie = async () => {
    try {
        const value = await AsyncStorage.getItem(constants.STORAGE_KEY.COOKIE);
        if (value !== null) {
            return value;
        }
        return '';
    } catch (error) {
        return '';
    }
};

export default getCookie;
