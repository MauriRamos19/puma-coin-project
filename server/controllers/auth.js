
const bcrypt = require('bcrypt');
const User  = require('../models/user');
const { generateJWT } = require("../helpers/generateJWT");
const { isValidPassword, isValidEmail } = require('../helpers/db-validators');


const mongoose = require('mongoose');
const { request, response } = require('express');
const { sendEmail } = require('../utils/sendEmail');

const login = async(req=request, res=response) => {
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

        const userId = mongoose.Types.ObjectId(userDB.id);

         return res
        .cookie("access_token", token, {
            maxAge: 60*60*100,
            httpOnly: true,
            sameSite: 'strict',
        })
        .status(200)
        .json({ 
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

        const link = `${process.env.BASE_URL}/finish-register/`;
        await sendEmail(user.email, "Welcome to the app", link);
        
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


const logout = (req, res=response) => {
    res.clearCookie("access_token").status(200).json({ message: "ok" });
}


const forgotPassword = async(req, res) => {
    const { email } = req.body;
    //console.log(email,"12345");
    try {
        const userDB = await User.findOne({ email });

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'email not found'
                }
            });
        }

        const token = await generateJWT(userDB.id);

        
        const link = `${process.env.BASE_URL}/password-reset/${userDB.id}/${token}`;
        await sendEmail(userDB.email, "Password reset", link);

        res.cookie("access_token", token, {
            maxAge: 60*60*100,
            httpOnly: true,
            sameSite: 'strict',
        }).status(200).json({
            ok: true,
            message: "email sent"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            err: error
        });
    }
}


const resetPassword = async (req, res=response) => {
    try {
        const { id, token } = req.params;
        const { password, password2 } = req.body;
        
        const user = await User.findById(id);
       
        if (!user)
            return res.status(400).send("user with given id doesn't exist");

        const tokenCookie = req.cookies.access_token;
       
        
        if(!(token == tokenCookie) && (token == null)) {
            return res.status(400).send("invalid token");
            
        }

        if(isValidPassword(password, password2) === false) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'password must be equal to confirm password'
                }
            });
            
        }
        
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);

        await user.save(); 
        res.status(200).json({
            ok: true,
            message: "password changed"
        });
     
    } catch(error) {
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
    renewToken,
    logout,
    forgotPassword,
    resetPassword
}
