const { response } = require("express");



const getUsers = async(req, res=response) => {
    res.json({
        msg: 'Hello World!'
    })
}


module.exports = {
    getUsers
}