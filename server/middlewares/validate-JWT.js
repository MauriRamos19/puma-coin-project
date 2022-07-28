const { response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async(req, res=response, next) => {

    const token = req.headers.authorization.split(' ')[1];

    if(!token) {
        
        return res.status(401).json({
            ok: false,
            message: 'No hay token'
        });
    }

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
 

        const user = await User.findById(id);


      
        if((!user) || (user.status === 'inactive')) {
            return res.status(401).json({
                ok: false,
                message: 'El usuario esta inactivo'
            });
        }
        
        req.user = user;
        req.token = token;

        next();
    }
    catch(err) {
        return res.status(401).json({
            ok: false,
            message: 'El token no es valido'
        });
    }
}


module.exports = {
    validateJWT
}
