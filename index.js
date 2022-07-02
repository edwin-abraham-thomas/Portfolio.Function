const util = require('./utils/util');
const emailService = require('./services/sendMail')

const contactForm = "/contactform";

exports.handler = async(event) => {
    console.log('Request Event : ', event);
    let response;

    switch (true) {
        case event.httpMethod === 'GET' && event.path === contactForm:
            const contactFormBody = JSON.parse(event.body);
            var emailServiceResponse = emailService.sendMail("Contact Form Alert", contactFormBody, "edwinabrhmt@gmail.com", "edwinabrhmt@gmail.com")
            response = util.buildResponse(200, emailServiceResponse);
            break;
    }

    return response;
}