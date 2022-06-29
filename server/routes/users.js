const { Router } = require("express");
const { getUser, putUser } = require("../controllers/users");
const { check } = require('express-validator');
const { validateFields } = require("../middlewares/validate-fields");

const router =  Router();


router.get('/',getUser);




module.exports = router;