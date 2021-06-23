const axios = require('axios');
const sgMail = require('@sendgrid/mail');

console.log(process.env.SENDGRID_API_KEY);

const instanceEmial = sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default instanceEmial;
/* const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': authorization
    }
});
 */
