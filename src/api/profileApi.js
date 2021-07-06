import instanceAxios from './baseApi';

export const updateProfile = (id, token, userDto) => {
    const _apiToken = `api_token=${token}&`;
    return instanceAxios.post(`users/${id}?${_apiToken}`, JSON.stringify(userDto));
}


export default updateProfile;


// users/${_user.id}?$_apiToken{ id, name, address, email }
