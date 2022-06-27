const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async(req, res, next) => {

    const token = req.headers['x-token'];
    
    if(!token) {
        
        return res.status(401).json({
            ok: false,
            message: 'No token provided'
        });
    }

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = User.findById(id);

        if((!user) || (user.status === 'inactive')) {
            return res.status(401).json({
                ok: false,
                message: 'User inactive'
            });
        }
        
        req.user = user;
        req.token = token;
        
        next();
    }
    catch(err) {
        return res.status(401).json({
            ok: false,
            message: 'Invalid token'
        });
    }
}


module.exports = {
    validateJWT
}
