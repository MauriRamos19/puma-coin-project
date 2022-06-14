const { modelNames } = require("mongoose");


const existEmail = async( email = '' ) => {
    const existEmail = await User.findOne({ email });
    if( existEmail ) {
        throw new Error(`email already exists`)
    }
}

const isValidEmail = (email = '') => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase()); 
}

const isValidPassword = (password = '', password2 = '') => {
    if(password !== password2) {
        return false;
    }
    return true;
}


module.exports =  {
    existEmail,
    isValidEmail,
    isValidPassword
}
