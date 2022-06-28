const { response } = require('express');
const { generateJWT } = require('../helpers/generateJWT');
const User = require('../models/user');
const { sendEmail } = require('../utils/sendEmail');

const router = require('express').Router();



router.post("/", async (req, res=response) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (!user)
            return res.status(400).send("user with given email doesn't exist");
        
        const token = req.cookies.access_token

     
        /* if(!token) {
            const accessToken = await generateJWT(user.id)
            token = await new Token({
                userId: user.id,
                token: accessToken,
            }).save();
        } */

        
        const link = `${process.env.BASE_URL}/password-reset/${user.id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);
    

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});


router.post('/password-reset/:id/:token');



module.exports = router;
