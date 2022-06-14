const { response } = require("express");
const User = require("../models/user");
const bcrypt = require('bcryptjs');



const getUsers = async(req, res=response) => {
    res.json({
        msg: 'Hello World!'
    })
}

const getUser = async(req, res=response) => {
    
    const { id } = req.params; 

    const user = await User.findById(id);

    if ( !user ) {
        return res.status(404).json({
            msg: 'User not found'
        })
    }

    res.status(201).json({
        user
    })
    

}

const postUser = async(req, res=response) => {
    
    const { password, img, rol, status, ...body} = req.body;

    const user = new User(body);

    var salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    

    await user.save();

    res.status(201).json({  user });


}


const putUser = async(req, res=response) => {
    
    const { id } = req.params;
    const body = req.body;

    const user = await User.findByIdAndUpdate(id, body, { new: true });

    res.status(201).json({  user });
}



const deleteUser = async(req, res=response) => {
    
    const { id } = req.params;

    const user = await User.findeByIdAndUpdate(id, { status: false });

    res.status(201).json({  user });
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}