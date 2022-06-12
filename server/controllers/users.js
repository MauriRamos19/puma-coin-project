const { response } = require("express");
const User = require('../models/user');



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
    getUser
}