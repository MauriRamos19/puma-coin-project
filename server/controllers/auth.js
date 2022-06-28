
const bcrypt = require('bcrypt');
const User  = require('../models/user');
const { generateJWT } = require("../helpers/generateJWT");
const { isValidPassword, isValidEmail } = require('../helpers/db-validators');



const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        

        const userDB = await User.findOne({ email });
            
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'email/password incorrect'
                }
            });
        }

        const validPassword = bcrypt.compareSync(password, userDB.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'password incorrect'
                }
            });
        }


        if(!userDB.status) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'user is not active'
                }
            });
        }

        const token = await generateJWT(userDB.id);

        res.json({
            ok: true,
            user: userDB,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            err: error
        });
    }
    
}

const register = async(req, res) => {
    const { nickName, email, password, password2 } = req.body;

    try {
        const userDB = await User.findOne({ email });


        if(userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'user already exists'
                }
            });
        }
        
        if(password.length < 6) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'password must be at least 6 characters'
                }
            });
        }
        
        if(isValidEmail(email) === false) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'email is not valid'
                }
            });
        }

        if(isValidPassword(password, password2) === false) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'password must be equal to confirm password'
                }
            });
        }
        

        const user = new User({ nickName, email, password });

        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);

        const token = await generateJWT(user.id);
        
        await user.save();

        

        res.json({
            ok: true,
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            err: error
        });
    }
    
}


const renewToken = async(req, res) => {
    const userId = req.user.id;
    const token = await generateJWT(userId);
    res.json({
        ok: true,
        token
    });
}



module.exports = {
    login,
    register,
    renewToken
}
