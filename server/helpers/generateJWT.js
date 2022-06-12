const jwt = require('jsonwebtoken');

const generateJWT = (id = '') => {

    return new Promise((resolve, reject) => {
        jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN}, (err, token) => {
            if (err) {
                console.log(err)
                reject('error al generar el token');
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generateJWT
}
