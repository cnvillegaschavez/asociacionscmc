import instanceAxios from './baseApi';
import Constants from './../util/constants';

export const login = (userDto) => {
    return instanceAxios.post('login', JSON.stringify(userDto) );
}

export const startVerification = (userDto) => {
    return instanceAxios.post('startVerification', JSON.stringify(userDto) );
}

export const verifyCode = (userDto) => {
    return instanceAxios.post('verifyCode', JSON.stringify(userDto) );
}

export const register = (userDto) => {
    return instanceAxios.post('register', JSON.stringify(userDto) );
}    

export const isAuth = () => {
    return sessionStorage.getItem(Constants.userInfo)?true:false;;
}

export const getUserInfo = () => {
    return JSON.parse(sessionStorage.getItem(Constants.userInfo));
}

export const updateUserInfo = (data) => {
    let user = JSON.parse(sessionStorage.getItem(Constants.userInfo));
    user.name = data.name;
    user.custom_fields.address.value = data.address;
    user.email = data.email;   

    sessionStorage.setItem(Constants.userInfo, JSON.stringify(user));
}

export const sendEmail = (userDto) => {
    return instanceAxios.post('send_reset_link_email', JSON.stringify(userDto) );
}

export default login;

