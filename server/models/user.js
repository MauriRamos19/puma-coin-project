

const { Schema, model } = require('mongoose');



const userSchema = Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    /* nickName: {
        type: String,
        required: true
    }, */
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: ["male", "female"]
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
    wallet: {
        type: String,
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true
    },
    wallet: {
        type: String
    }
});


userSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}


module.exports = model('User', userSchema);
