import instanceAxios from './baseApi';
import Constants from './../util/constants';

export const getExistSettings = () => {
    return sessionStorage.getItem(Constants.settingName)?true:false;
}

const getSettings = () => {
    return instanceAxios.get('settings');
}

export default getSettings;