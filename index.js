const util = require('./utils/util');
const emailService = require('./services/sendMail')

const contactForm = "/contactform";

exports.handler = async(event) => {
    console.log('Request Event : ', event);
    console.log('Event Http Method : ', event.httpMethod);
    let response;

    switch (true) {
        case event.httpMethod === 'POST' && event.path === contactForm:
            const contactFormBody = event.body.toString();
            response = await emailService.sendMail("Contact Form Alert", contactFormBody, "edwinabrhmt@gmail.com", "edwinabrhmt@gmail.com")
                //response = util.buildResponse(200, emailServiceResponse);
                //console.log('eamilservice Response : ', emailServiceResponse);
            break;
    }

    return response;
}