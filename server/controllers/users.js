const { response } = require("express");
const User = require('../models/user');



const getUser = async(req, res=response) => {
    
    const { id } = req.params; 

    const user = await User.findById(id);

    if ( !user ) {
        return res.status(404).json({
            msg: 'Usuario no encontrado'
        })
    }

    res.status(201).json({
        user
    })
    

}



// const putUser = async(req, res=response) => {
    
//     const { id } = req.params;
    
//     let body = req.body;

//     var { address2, ...rest } = body

//     for(const param in rest) {
//         if(rest[param] === '') {
//             res.status(400).json({
//                 msg: 'Los campos no pueden estar vacios'
//             })
//         }
//     }

//     const user = await User.findByIdAndUpdate(id, body, { new: true });

//     res.status(201).json({  user });

    

    
// }



const deleteUser = async(req, res=response) => {
    
    const { id } = req.params;

    const user = await User.findeByIdAndUpdate(id, { status: false });

    res.status(201).json({  user });
}


module.exports = {
    getUser
    //putUser
}