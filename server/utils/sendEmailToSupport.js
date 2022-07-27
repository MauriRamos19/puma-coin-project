const nodemailer = require('nodemailer');


const sendEmailToSupport = async (name ,email, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user: process.env.PUMACOIN_EMAIL,
            pass: process.env.PUMACOIN_EMAIL_PASSWORD
        }
    }
);

    const mailOptions = {
        from: process.env.PUMACOIN_EMAIL,
        to: process.env.PUMACOIN_EMAIL,
        subject: subject,
        text: message
    };
    
    transporter.sendMail(mailOptions,  (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendEmailToSupport
}