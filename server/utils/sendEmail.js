const nodemailer = require('nodemailer');


const sendEmail = async (email, subject, text) => {
    const transporter = nodemailer.createTransport({
        host: 'puma-coin@protonmail.com',
        port: 465,
        secure : true,
        service: 'protonmail',
        auth: {
            user: 'puma-coin@protonmail.com',
            pass: 'Pr0t0nm41l_Ms3v41'
        }
    });

    const mailOptions = {
        from: 'puma-coin@protonmail.com',
        to: email,
        subject: subject,
        text: text
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