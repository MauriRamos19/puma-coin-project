const { Router } = require("express");
const { getUsers, getUser, postUsers, postUser, putUser, deleteUser } = require("../controllers/users");

const router =  Router();



router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/',postUser)
router.put('/',putUser)
router.delete('/',deleteUser)




module.exports = router;