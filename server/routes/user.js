
const router =  require('express').Router();

const { getUser, editUser, deleteAccount } = require('../controllers/user');
const { validateJWT } = require('../middlewares/validate-JWT');



router.get('/', validateJWT ,getUser);

router.put('/', validateJWT ,editUser);

router.delete('/', validateJWT ,deleteAccount);


router.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000/", "https://pumacoin-finance.web.app/", "https://api.devnet.solana.com/"]
    })
);


module.exports = router;