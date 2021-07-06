import instanceAxios from './baseApi';

export const getOrderByUserId = (id, token) => {
    const _apiToken = `api_token=${token}&`;
    return instanceAxios.get(`orders?${_apiToken}with=user;productOrders;productOrders.product;productOrders.options;orderStatus;payment&search=user.id:${id}&searchFields=user.id:=&orderBy=id&sortedBy=desc`);
}

 export default getOrderByUserId;
