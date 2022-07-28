const {sendEmailToSupport} = require('../utils/sendEmailToSupport');
const { supportEmail } = require('../public/templates.js')

const receiveEmail = async (req, res) => {
        
    const { name ,email, subject, message } = req.body;

    const template = supportEmail(name, email, subject, message);

    
    await sendEmailToSupport("Support service",template);

    res.status(200).json({
        ok: true,
        msg: 'Mensaje enviado'
    });
}

module.exports = {
    receiveEmail
}