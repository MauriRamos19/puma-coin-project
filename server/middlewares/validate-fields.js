

const validateFields = (req, res, next) => {
    const { nickName, email, password, password2 } = req.body;

    if(!nickName || !email || !password || !password2) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'fields can not be empty'
            }
        });
    }

    next();
}

module.exports = {
    validateFields
}


const validateFieldsLogin = (req, res, next) => {
    const { email, password } = req.body;

    if( !email || !password ) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'fields can not be empty'
            }
        });
    }

    next();
}

module.exports = {
    validateFields,
    validateFieldsLogin
}