const axios = require("axios").default;
const uri = process.env.REACT_APP_API_URL;

const register = async (user) => {
    try {

        const response = await axios.post(uri + '/auth/register', user);
        return response.data;

    } catch ({ response: { data: { ok, err } } }) {
        
        return {
            error: err.message
        };

    }
}

const login = async (user) => {
    try {

        const response = await axios.post(uri + '/auth/login', user);
        return response.data;

    } catch ({ response: { data: { ok, err } } }) {

        return {
            error: err.message
        };

    }
}

export { register, login };
