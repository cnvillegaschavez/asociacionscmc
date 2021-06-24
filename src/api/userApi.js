const sgMail = require('@sendgrid/mail');

const instanceEmial = sgMail.setApiKey('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')

export const sendEmail = (userDto) => {
    return instanceEmial.send(userDto);
}

export default sendEmail;

