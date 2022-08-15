const { requestPayment, requestPaymentInfo, getPaymentsInfo } = require('../controllers/payments');
const { validateJWT } = require('../middlewares/validate-JWT');

const router = require('express').Router();


router.post('/request-payment', validateJWT, requestPayment);
router.get('/request-payment/:id', validateJWT, requestPaymentInfo);
router.get('/getPayment/:id', validateJWT, getPaymentsInfo);


module.exports = router;