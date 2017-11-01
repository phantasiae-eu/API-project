var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "testemailimaginaria@gmail.com",
        pass: ""
    }
});

var sendMail = function (email, token) {
    return new Promise(
        function (resolve, reject) {
            var link = "https://www.google.it/";
            var mailOptions = {
                from: "giorgio[ sg<testemailimaginaria@gmail.com>",
                to: email,
                subject: "Account verification - Test API",
                html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
            };
            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                };
            });
        });
};

module.exports = sendMail;