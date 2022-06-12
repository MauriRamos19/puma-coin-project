var jwt = require('jsonwebtoken');


const generateJWT = ( uid = '' ) => {
    return new Promise((resolve, reject) => {

        jwt.sign({uid}, process.env.JWT_SECRET, {
            expiresIn: '4h'
        }, (err,token) => {

            if(err) {
                reject('Failed to generate token')
            } else {
                resolve(token)
            }
        })
    })
}

module.exports = generateJWT