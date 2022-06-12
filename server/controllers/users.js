const { response } = require("express");
const User = require('../models/user');


const updateUser = async(req, res=response) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {new:true});
    res.json(user);
}

const deleteUser = async(req, res=response) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.json(user);
}



module.exports = {
    postUser
}