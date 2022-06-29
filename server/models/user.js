

const { Schema, model } = require('mongoose');



const userSchema = Schema({
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida'],
    },
    RTN: {
        type: String
    },
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enum: ["male","female","other","masculino","femenino","otro"]
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    address2: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    department: {
        type: String
    },
    zipCode: {
        type: String
    },
    img: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    wallet: {
        type: String,
    },
    userType: {
        type: String,
        enum: ["natural", "company"]
    }

});






userSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}


module.exports = model('User', userSchema);
