const axios = require('axios').default;
const uri = 'api/auth/register';


const register  = async (user) => {
    const response = await axios.post(uri, user);
    return response.data;
}

const login  = async (user) => {
    const response = await axios.post(uri, user);
    return response.data;
}


export default { register };