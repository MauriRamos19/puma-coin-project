const axios = require("axios").default;
const uri = process.env.REACT_APP_API_URL;

const register = async (user) => {
    try {

        const response = await axios.post(uri + '/auth/register', user);
        return response.data;

    } catch ({ response: { data: { errors } } }) {

        return {
            error: errors[0].msg
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

const logoutUser = async () => {
    try {
        
        const response = await axios.get(uri + '/auth/logout');
        return response.data;

    } catch ({ response: { data: { ok, err } } }) {
        
        return {
            error: err.message

        };  
    }
}

const sendEmail = async (email) => {

    //console.log(email);
    try {

        const response = await axios.post(uri + '/auth/sendEmail', {email});
        return response.data;

    } catch (error) {

        console.log(error);
        return {
            error: "Aqui hay problemas"
        };

    }
}

const resetPassword = async (id, token, password, password2) => {

    console.log(uri + `/auth/${id}/${token}`);
    try {

        const response = await axios.put("http://localhost:8899/api" + `/password-reset/${id}/${token}`, {password, password2});
        return response.data;

    } catch (error) {

        console.log(error);
        return {
            error: "Aqui hay problemas"
        };

    }
}

export { register, login, logoutUser, sendEmail, resetPassword };

//export { register, login, logoutUser };
