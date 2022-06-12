const { Router } = require("express");
const { renewToken, login } = require("../controllers/auth");

const router = Router();


router.post("/login", login);

router.get('/',renewToken)



module.exports = router;