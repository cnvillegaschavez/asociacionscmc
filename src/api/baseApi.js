import Constants from './../util/constants';
const axios = require('axios');


let authorization='';
if(sessionStorage.getItem(Constants.tokenName)){
  let user =  JSON.parse(sessionStorage.getItem(Constants.userInfo));
  if ( user.data && user.data.token != null ) {
    authorization = `Bearer ${user.data.token}`;
  }
}

const instanceAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': authorization
  }
});

export default instanceAxios;