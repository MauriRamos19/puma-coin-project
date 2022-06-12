const jwt = require('jsonwebtoken');

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const generateJWT = require('../helpers/generateJWT');



const login = async(req, res) => {
    
    const { email, password } = req.body;

    if ( !email || !password ) {
        return res.status(400).json({
            msg: 'All fields are required'
        })
    }
    
    const user = await User.findOne({ email });

    
    if( !user ) {
        return res.status(400).json({
            msg: 'User does not exist'
        })
    }
    
    const validPassword = bcrypt.compareSync( password, user.password );

    if( !validPassword ) {

        return res.status(400).json({
            msg: 'Invalid password'
        })
    }


    if( !user.status ) {
        return res.status(400).json({
            msg: 'User is not active'
        })
    }

    const token = await generateJWT(user.id);



    res.status(201).json({
        user,
        token
    })

    
}

const renewToken = async(req, res = response) => {
    
    const { user } = req

    res.json({
        user
    })

}
       



module.exports = {
    login,
    renewToken
}



 
 