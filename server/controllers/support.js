const {sendEmailToSupport} = require('../utils/sendEmailToSupport');


const receiveEmail = (req, res) => {
        
    const { name ,email, subject, message } = req.body;

    sendEmailToSupport(name, email, subject, message);

    res.status(200).json({
        ok: true,
        msg: 'Mensaje enviado'
    });
}

module.exports = {
    receiveEmail
}