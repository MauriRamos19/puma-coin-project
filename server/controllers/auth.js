
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
                    message: 'Correo/contraseña incorrectas'
                }
            });
        }

        const validPassword = bcrypt.compareSync(password, userDB.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'La contraseña es incorrecta'
                }
            });
        }


        if(!userDB.status) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario no esta activo, por favor verifique su correo'
                }
            });
        }

        const token = await generateJWT(userDB.id);

        const userId = mongoose.Types.ObjectId(userDB.id);

         return res
        //  .cookie("access_token", token, {
        //     maxAge: 60*60*100,
        //     httpOnly: true,
        //     sameSite: 'strict',
        // })
        .status(200)
        .json({
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
    const { email, password, password2 } = req.body;

    try {
        const userDB = await User.findOne({ email });


        if(userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario ya existe'
                }
            });
        }
        
        if(password.length < 6) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'La contraseña debe tener al menos 6 caracteres'
                }
            });
        }
        
        if(isValidEmail(email) === false) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El correo no es valido'
                }
            });
        }

        if(isValidPassword(password, password2) === false) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Las contraseñas no coinciden'
                }
            });
        }
        

        const user = new User({ email, password });

        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);

        const token = await generateJWT(user.id);

        const link = `${process.env.BASE_URL}/finish-register?id=${user.id}`;
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

    try {
        const userDB = await User.findOne({ email });

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El correo no existe'
                }
            });
        }

        const token = await generateJWT(userDB.id);

        
        const link = `${process.env.BASE_URL}/password-reset?id=${userDB.id}&token=${token}`;
        await sendEmail(userDB.email, "Password reset", link);

        res.cookie("access_token", token, {
            maxAge: 60*60*100,
            httpOnly: true,
            sameSite: 'strict',
        }).status(200).json({
            ok: true,
            message: "Email enviado"
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            err: error
        });
    }
}


const finishRegister = async(req, res) => {
    const { id, userType } = req.query;
    const body = req.body;
    try {
        const userDB = await User.findById(id);

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario no existe'
                }
            });
        }
        


        if(userType === 'company') {
            
            const { address2, img, wallet, ...rest } = body;

            for(const param in rest) {
                if(rest[param] === '') {
                    res.status(400).json({
                        msg: 'Los campos no pueden estar vacios'
                    })
                }
            }

            const user = await User.findByIdAndUpdate(id, { userType: userType, ...body}, { new: true });
           
            await user.save()

            return res.status(200).json({
                ok: true,
                user: userDB
            });
            
        } else if(userType === 'natural') {
            
            const { address2, img, wallet, ...rest } = body;


     
            for(const param in rest) {
                if(rest[param] === '') {
                    res.status(400).json({
                        msg: 'Los campos no pueden estar vacios'
                    })
                }
            }

            const user = await User.findByIdAndUpdate(id, { userType: userType, ...body}, { new: true });
           
            await user.save()

            return res.status(200).json({
                ok: true,
                user: userDB
            });

        }

        
    
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
            return res.status(400).send("Usuario no encontrado");

        const tokenCookie = req.cookies.access_token;
       
        
        if(!(token == tokenCookie) && (token == null)) {
            return res.status(400).send("Token no valido");
            
        }

        if(isValidPassword(password, password2) === false) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Las contraseñas no coinciden'
                }
            });
            
        }
        
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);

        await user.save(); 
        res.status(200).json({
            ok: true,
            message: "Contraseña actualizada"
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
    resetPassword,
    finishRegister
}
