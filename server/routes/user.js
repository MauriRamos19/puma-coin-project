
const router =  require('express').Router();
const cors = require('cors');
const { getUser, editUser, deleteAccount } = require('../controllers/user');
const { validateJWT } = require('../middlewares/validate-JWT');

const multer = require('multer');



const storage = multer.diskStorage({});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.get('/', validateJWT ,getUser);

router.put('/',  validateJWT, upload.single('img'), editUser);

router.delete('/', validateJWT ,deleteAccount);

router.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000/", "https://pumacoin-finance.web.app/", "https://api.devnet.solana.com/"]
    })
);


module.exports = router;