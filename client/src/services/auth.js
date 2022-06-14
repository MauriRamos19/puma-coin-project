const axios = require('axios').default;
const uri = process.env.REACT_APP_API_URL;

const register = async (user) => {
    const response = await axios.post(uri, user);
    return response.data;
}

const login = async (user) => {
    const response = await axios.post(uri, user);
    return response.data;
}


export {
    register,
    login
};