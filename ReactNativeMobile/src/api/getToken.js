import { AsyncStorage } from 'react-native';
import constants from '../components/Main/Constants';

const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem(constants.STORAGE_KEY.TOKEN);
        if (value !== null) {
            return value;
            //this.props.changeTitle(value);
        }
        return '';
    } catch (error) {
        // Error retrieving data
        return '';
    }
};

export default getToken;
