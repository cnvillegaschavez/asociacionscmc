const sgMail = require('@sendgrid/mail');

console.log(process.env.SENDGRID_API_KEY);

const instanceEmial = sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default instanceEmial;
