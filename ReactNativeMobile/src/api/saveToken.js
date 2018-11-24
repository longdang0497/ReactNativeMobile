import { AsyncStorage } from 'react-native';
import constants from '../components/Main/Constants';

const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem(constants.STORAGE_KEY.TOKEN, token);
        console.log(token);
    } catch (error) {
        // Error saving data
    }
};

export default saveToken;
