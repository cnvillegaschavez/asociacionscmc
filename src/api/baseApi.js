const axios = require('axios');

const instanceAxios = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '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',
  }
});

export default instanceAxios;