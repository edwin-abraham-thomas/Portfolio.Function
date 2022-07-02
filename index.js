const util = require('./utils/util');

const contactForm = "/contactform";

exports.handler = async(event) => {
    console.log('Request Event : ', event);
    let response;

    switch (true) {
        case event.httpMethod === 'GET' && event.path === contactForm:
            response = util.buildResponse(200);
            break;
    }
}