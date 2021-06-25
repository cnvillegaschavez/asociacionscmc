const axios = require('axios');

const instanceAxios = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '',
  }
});

export default instanceAxios;