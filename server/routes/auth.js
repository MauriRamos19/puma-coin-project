const { Router } = require("express");
const { login, register, renewToken, logout } = require("../controllers/auth");
const { check } = require('express-validator');
const { isValidPassword, existEmail } = require("../helpers/db-validators");
const { validateFields} = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-JWT");
const authorization = require("../middlewares/authorization");
const router =  Router();



router.post('/login',[
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
], login);

router.post('/register',[
    check('nickName', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('password','La contraseña debe tener al menos 6 caracteres').isLength({min:6}),
    validateFields,
    check('password').custom(isValidPassword),
    check('email','El correo ya esta registrado').custom(existEmail),
],register);

router.get("/protected", authorization, (req, res) => {
  return res.json({ userId: req.userId });
});

router.get('/logout',[
    authorization
], logout);


router.get('/',[authorization], (req, res) => {
    const token = req.cookies.access_token;

    if(!token) {
        return res.sendStatus(403);
    }

    return res.json({
        token
    })
});

router.get('/', validateJWT, renewToken);
module.exports = router;