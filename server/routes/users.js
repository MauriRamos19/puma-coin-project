const { Router } = require("express");
const { getUser, putUser } = require("../controllers/users");

const router =  Router();


router.get('/',getUser);

router.put('/:id',putUser);

module.exports = router;