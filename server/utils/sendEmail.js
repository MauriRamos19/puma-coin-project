const nodemailer = require('nodemailer');


const sendEmail = async (user, subject, html) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user: "pumacoin1847@outlook.com",
            pass: "Pum4c01nms3v41",
        }
    }
    
    );

    const mailOptions = {
        from: 'Puma Anonimo <pumacoin1847@outlook.com>',
        to: user.email,
        subject: subject,
        html: html
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
    sendEmail
}