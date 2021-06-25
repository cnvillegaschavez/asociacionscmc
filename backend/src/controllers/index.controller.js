const controller = {}

controller.index = (request, response) => {
    response.send("Conexion establecida desde index.controller.js")
}

controller.sendEmail = (request, response) => {

    console.log(request.body);
    // const bodyHtml = (request) => {
    //     return (`<table><tbody><tr><td>Nombres:</td><td>${request.body.name}</td></tr><tr><td>Correo:</td><td>${request.body.email}</td></tr><tr><td>Mensaje:</td><td>${request.body.message}</td></tr></tbody></table>`)
    // }

    // const miHtml = bodyHtml(request);

    // const sgMail = require('@sendgrid/mail')
    // sgMail.setApiKey('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');
    // const msg = {
    //     to: ['sathielx9@gmail.com', 'centrodeconciliacionexlege@asociacionscmc.org','cnvillch@gmail.com'], 
    //     from: 'centrodeconciliacionexlege@asociacionscmc.org', 
    //     subject: 'Mesa de partes virtual - Pagina Web',
    //     text: 'Content',
    //     html: miHtml,
    // }
    // sgMail.send(msg).then(() => {
    //     console.log('Email sent');
    //     console.log(request.body.name);
    //     response.send('Recibido en el servidor');
    //     response.send(request.body.name);
    // })
    // .catch((error) => {
    //     console.error(error)
    // })
}

module.exports = controller;