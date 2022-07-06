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
            user: process.env.PUMACOIN_EMAIL,
            pass: process.env.PUMACOIN_EMAIL_PASSWORD
        }
    }
    
    );

    const mailOptions = {
        from: 'Equipo PumaCoin <pumacoin1847@outlook.com>',
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
