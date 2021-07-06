import instanceAxios from './baseApi';

export const getNotificationByUserId = (id, token) => {
    const _apiToken = `api_token=${token}&`;
    return instanceAxios.get(`notifications?${_apiToken}search=notifiable_id:${id}&searchFields=notifiable_id:=&orderBy=created_at&sortedBy=desc&limit=10`);
}

 export default getNotificationByUserId;
