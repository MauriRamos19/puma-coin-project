const { request, response } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isValidPassword } = require('../helpers/db-validators');
const User = require('../models/user');



const getUser = async(req,res=response) => {
    
    try {
        
        const user = req.user;
        
        if(!user) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario no existe'
                }
            });
        }

        res.status(200).json({
            ok: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Algo salio mal'
        })
    }
}




const editUser = async (req, res) => {

        try {
            const user = req.user;

 

        if (!user) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario no existe'
                }
            });
        }

        const { address2, img, wallet, currentPassword, newPassword, newPassword2, name, lastName,...rest } = req.body;

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

        

        if ( currentPassword || newPassword || newPassword2 ) {
            const validPassword = bcrypt.compareSync(currentPassword, user.password);

            if (!validPassword) {
                        return res.status(400).json({
                            ok: false,
                            err: {
                                message: 'La contraseña es incorrecta'
                            }
                        });
            } else {
                if (isValidPassword(newPassword, newPassword2) === false) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'Las contraseñas no coinciden'
                        }
                    });
                }

                if (newPassword.length < 6) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'La contraseña debe tener al menos 6 caracteres'
                    }
                });
                }

                    const salt = bcrypt.genSaltSync(10);
                    user.password = bcrypt.hashSync(newPassword, salt);;
            }
        }
        
    



        user.phone = rest.phone;
        user.address = rest.address;
        user.address2 = address2;
        user.img = img;
        user.country = rest.country;
        user.department = rest.department;
        user.city = rest.city
        



        await user.save()

        return res.status(200).json({
            ok: true,
            user
        });

        } catch (error) {
            
            res.status(500).json({
                ok: false,
                msg: 'Algo salio mal'
            })
        }

}


const deleteAccount = async(req, res=response) => {
    
    try {
    
        const user = req.user;
        
        if(!user) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El usuario no existe'
                }
            });
        }

        await User.findByIdAndUpdate(user._id, { status: false }, { new: true });

        return res.status(200).json({
            ok: true,
            msg: 'Usuario eliminado'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Algo salio mal'
        })
    }
}









module.exports = {
    getUser,
    editUser,
    deleteAccount
};