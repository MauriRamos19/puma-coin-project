const { requestPayment, requestPaymentInfo, customeRequestPayment } = require('../controllers/payments');
const { validateJWT } = require('../middlewares/validate-JWT');

const router = require('express').Router();


router.post('/request-payment', validateJWT, requestPayment);
router.get('/custome-request-payment',  customeRequestPayment);
router.get('/request-payment/:id', validateJWT, requestPaymentInfo);


module.exports = router;