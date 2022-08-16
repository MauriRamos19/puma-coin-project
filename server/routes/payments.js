const { requestPayment, requestPaymentInfo, webhooksHandler, claimPayments, getUnclaimedTokens, getAllPayments } = require('../controllers/payments');
const { validateJWT } = require('../middlewares/validate-JWT');

const router = require('express').Router();

router.post('/request-payment', validateJWT, requestPayment);
router.get('/request-payment/:id', validateJWT, requestPaymentInfo);
router.get('/get-all-payments', validateJWT, getAllPayments);
router.get('/get-unclaimed-tokens', validateJWT, getUnclaimedTokens);
router.put('/claim-payments-tokens', validateJWT, claimPayments);
router.post('/webhooks', webhooksHandler);
// router.get('/custome-request-payment', validateJWT, customeRequestPayment);


module.exports = router;