const { receiveEmail } = require('../controllers/support');

const router = require('express').Router();


router.post('/', receiveEmail)





module.exports = router;