import instanceAxios from './baseApi';

export const getAddressByUserId = (id, token) => {
    const _apiToken = `api_token=${token}&`;
    return instanceAxios.get(`delivery_addresses?${_apiToken}search=user_id:${id}&searchFields=user_id:=&orderBy=updated_at&sortedBy=desc`);
}

export const registerAddress = (token, addressDto) => {
    const _apiToken = `api_token=${token}&`;
    return instanceAxios.post(`delivery_addresses?${_apiToken}`, JSON.stringify(addressDto) );
}

export default getAddressByUserId;

