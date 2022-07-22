
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { generateJWT } = require("../helpers/generateJWT");
const { isValidPassword, isValidEmail } = require('../helpers/db-validators');

const templatePasswordReset = require('../public/templates.js')

const { request, response } = require('express');
const { sendEmail } = require('../utils/sendEmail');


const login = async (req = request, res = response) => {
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


        if (!userDB.status) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario no esta activo, por favor verifique su correo'
                }
            });
        }

        const token = await generateJWT(userDB.id);

      

        res.cookie('x_access_token',token, {maxAge: 3600000});
        
    
        return res.
            status(200)
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

const register = async (req, res) => {
    const { email, password, password2 } = req.body;

    try {
        const userDB = await User.findOne({ email });


        if (userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario ya existe'
                }
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'La contraseña debe tener al menos 6 caracteres'
                }
            });
        }

        if (isValidEmail(email) === false) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El correo no es valido'
                }
            });
        }

        if (isValidPassword(password, password2) === false) {
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




        const link = `${process.env.BASE_URL}/finish-register/${user.id}`;

        const hmtl = `<img src="https://res.cloudinary.com/dzv5rmys1/image/upload/v1656498767/Verifica_tu_email_kxrbb4.png">
            <p>Entra al siguiente enlace para completar tu registro:</p>
            <a href="${link}">${link}</a>`;

        await sendEmail(user, "Bienvenido a Puma Coin", hmtl);

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


// const logout = (req, res=response) => {
//     res.clearCookie("access_token").status(200).json({ message: "ok" });
// }


const forgotPassword = async (req, res) => {

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

     

        const link = `${process.env.BASE_URL}/password-reset/${userDB.id}/${token}`;

     
       
        const html = (templatePasswordReset(email, link));

      
        await sendEmail(userDB, "Password reset", html);

        res
            .status(200).json({
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


const finishRegister = async (req, res) => {

    const { id } = req.params;
    const body = req.body;
    console.log("FinishRegister: body - ", body)
    console.log("FinishRegister: id - ", id)

    try {
        const userDB = await User.findById(id);
        console.log("FinishRegister: userDB - ", userDB)

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario no existe'
                }
            });
        }

        const { address2, img, wallet, ...rest } = body;

        const emptyFields = (
            Object.entries(rest)
                .reduce((emptyfields, [key, value]) => [...emptyfields, !value && key], [])
                .filter(field => typeof field === 'string')
        );

        if (emptyFields.length > 0) {
            res.status(400).json({
                ok: false,
                msg: 'Los campos no pueden estar vacios',
                fields: emptyFields
            })
        }


        const user = await User.findByIdAndUpdate(id, { ...body }, { new: true });
        console.log("FinishRegister: user - ", user)

        await user.save()

        return res.status(200).json({
            ok: true,
            user: userDB
        });


    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            err: error
        });
    }
}


const resetPassword = async (req, res = response) => {
    try {
        const { id, token } = req.params;
        const { password, password2 } = req.body;

        const user = await User.findById(id);

        console.log(id)
        if (!user)
            return res.status(400).send("Usuario no encontrado");

        const tokenCookie = req.cookies.access_token;


        if (!(token == tokenCookie) && (token == null)) {
            return res.status(400).send("Token no valido");

        }

        if (isValidPassword(password, password2) === false) {
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

    } catch (error) {
        res.status(500).json({
            ok: false,
            err: error
        });
    }

}


const renewToken = async (req, res) => {
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
    forgotPassword,
    resetPassword,
    finishRegister
}
