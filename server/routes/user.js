
const router =  require('express').Router();

const { getUser, editUser, deleteAccount } = require('../controllers/user');
const { validateJWT } = require('../middlewares/validate-JWT');



router.get('/', validateJWT ,getUser);

router.put('/', validateJWT ,editUser);

router.delete('/', validateJWT ,deleteAccount);



module.exports = router;