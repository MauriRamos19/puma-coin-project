const { Router } = require("express");
const { login, register, renewToken, logout, forgotPassword, finishRegister, googleSignIn } = require("../controllers/auth");
const { check } = require('express-validator');
const { isValidPassword, existEmail } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-JWT");
const router = Router();
const cors = require('cors');
const { uploadImageCloudinary } = require("../controllers/user");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


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

router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields
], login);


router.post('/googleSignIn', googleSignIn);




router.post('/sendEmail', [
    check('email', 'El correo es obligatorio').isEmail(),
    validateFields
], forgotPassword);

router.post('/register', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validateFields,
    check('password').custom(isValidPassword),
    check('email', 'El correo ya esta registrado').custom(existEmail),
], register);


router.put('/finish-register/:id',upload.single('img'), finishRegister);

// router.post('/upload/image/:id', , uploadImageCloudinary)

router.get('/', validateJWT, renewToken);

router.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000/", "https://pumacoin-finance.web.app/", "https://api.devnet.solana.com/"]
    })
);
module.exports = router;