const { Router } = require("express");
const { login, register, renewToken } = require("../controllers/auth");
const { check } = require('express-validator');
const { isValidPassword, existEmail } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-JWT");
const router =  Router();



router.post('/login',[
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty()
], login);

router.post('/register',[
    check('nickName', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('password','La contraseña debe tener al menos 6 caracteres').isLength({min:6}),
    check('password').custom(isValidPassword),
    check('email','El correo ya esta registrado').custom(existEmail),
    validateFields
],register);



router.get('/', validateJWT, renewToken);
module.exports = router;