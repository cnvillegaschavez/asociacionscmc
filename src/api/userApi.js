const sgMail = require('@sendgrid/mail');


const instanceEmial = sgMail.setApiKey('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')

export const sendEmail = (userDto) => {
    instanceEmial
        .send(userDto)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

export default sendEmail;

