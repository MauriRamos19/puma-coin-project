const { createSession } = require('../controllers/payments');

const router = require('express').Router();


router.get('/create/session', createSession);


module.exports = router;