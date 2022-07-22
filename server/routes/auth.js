const { Router } = require("express");
const { login, register, renewToken, logout, forgotPassword, finishRegister } = require("../controllers/auth");
const { check } = require('express-validator');
const { isValidPassword, existEmail } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-JWT");
const router = Router();
const functions = require('firebase-functions');


router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields
], login);


router.post('/sendEmail', [
    check('email', 'El correo es obligatorio').isEmail(),
    validateFields
], forgotPassword);

router.post('/register', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validateFields,
    check('password').custom(isValidPassword),
    check('email', 'El correo ya esta registrado').custom(existEmail),
], register);


router.put('/finish-register/:id', finishRegister);


router.get('/', validateJWT, renewToken);

exports.widgets = functions.https.onRequest(router);