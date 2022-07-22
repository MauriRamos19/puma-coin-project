const { response } = require('express');
const { generateJWT } = require('../helpers/generateJWT');
const User = require('../models/user');
const { sendEmail } = require('../utils/sendEmail');
const nodemailer = require('nodemailer');
const router = require('express').Router();
const { resetPassword } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');



router.put('/:id/:token', validateFields, resetPassword);


module.exports = router;
