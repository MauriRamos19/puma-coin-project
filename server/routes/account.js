
const router =  require('express').Router();

const { getInfoAccount, putInfoAccount, deleteAccount } = require('../controllers/account');
const { validateJWT } = require('../middlewares/validate-JWT');



router.get('/', validateJWT ,getInfoAccount);

router.put('/', validateJWT ,putInfoAccount);

router.delete('/', validateJWT ,deleteAccount);

router.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000/", "https://pumacoin-finance.web.app/settings", "https://api.devnet.solana.com/"]
    })
);


module.exports = router;