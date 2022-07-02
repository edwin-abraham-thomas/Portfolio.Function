const util = require('./utils/util');
const emailService = require('./services/sendMail')

const contactForm = "/contactform";

exports.handler = async(event) => {
    console.log('Request Event : ', event);
    console.log('Event Http Method : ', event.httpMethod);
    let response;

    switch (true) {
        case event.httpMethod === 'POST' && event.path === contactForm:
            const contactFormBody = JSON.stringify(event.body);
            var emailServiceResponse = emailService.sendMail("Contact Form Alert", contactFormBody, "edwinabrhmt@gmail.com", "edwinabrhmt@gmail.com")
            response = util.buildResponse(200, emailServiceResponse);
            break;
    }

    return response;
}