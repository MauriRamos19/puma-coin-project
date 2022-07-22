
const router =  require('express').Router();

const { getInfoAccount, putInfoAccount, deleteAccount } = require('../controllers/account');
const { validateJWT } = require('../middlewares/validate-JWT');



router.get('/', validateJWT ,getInfoAccount);

router.put('/', validateJWT ,putInfoAccount);

router.delete('/', validateJWT ,deleteAccount);




module.exports = router;