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

    return ses.sendEmail(params).promise();
}

module.exports.sendMail = sendMail