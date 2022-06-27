const { Router } = require("express");
const { getUser, putUser } = require("../controllers/users");
const { check } = require('express-validator');
const { validateFields } = require("../middlewares/validate-fields");

const router =  Router();


router.get('/',getUser);

router.put('/:id',[
    check('firstName','firstName is required').isString(),
    check('lastName','firstName is required').isString(),
    check('sex','firstName is required').isString(),
    check('phone','firstName is required').isMobilePhone(),
    check('address1','firstName is required').isString(),
    check('address2','firstName is required').isString(),
    check('city','firstName is required').isString(), 
    check('country','firstName is required').isString(),   
    check('department','firstName is required').isString(),
    check('zipCode','firstName is required').isNumeric(),
    validateFields     
],putUser);




module.exports = router;