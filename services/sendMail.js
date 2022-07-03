const util = require('./utils/util');

var aws = require("aws-sdk");
var ses = new aws.SES({ region: "ap-south-1" });

async function sendMail(subject, body, senderEmail, recipientEmail) {
    var params = {
        Destination: {
            ToAddresses: [recipientEmail],
        },
        Message: {
            Body: {
                Text: { Data: body },
            },

            Subject: { Data: subject },
        },
        Source: senderEmail,
    };

    var result = await ses.sendEmail(params).promise();

    if (result.MessageId != null) {

        var contactFormResponseBody = {
            "firstName": body.firstName,
            "lastName": body.lastName,
            "email": body.email,
            "success": true
        }

        var response = util.buildResponse(200, contactFormResponseBody);
    } else {
        var response = util.buildResponse(500, "Error Sending Email");
    }

    return response;
}

module.exports.sendMail = sendMail