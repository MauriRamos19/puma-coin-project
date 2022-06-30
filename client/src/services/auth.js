const axios = require("axios").default;
const uri = process.env.REACT_APP_API_URL + "/auth";

const register = async (user) => {
    try {

        const response = await axios.post(uri + '/register', user);
        return response.data;

    } catch ({ response: { data: { errors } } }) {

        return {
            error: errors[0].msg
        };

    }
}

const login = async (user) => {
    try {

        const response = await axios.post(uri + '/login', user);
        return response.data;

    } catch ({ response: { data: { ok, err } } }) {

        return {
            error: err.message
        };

    }
}

const logoutUser = async () => {
    try {

        const response = await axios.get(uri + '/logout');
        return response.data;

    } catch ({ response: { data: { ok, err } } }) {

        return {
            error: err.message

        };
    }
}

const sendEmail = async (email) => {

    try {

        const { data: responseData } = await axios.post(uri + '/sendEmail', { email });
        const { ok, message } = responseData;

        console.log(message);

        if (ok)
            return true;
        else
            return false;

    } catch (error) {

        console.error(`Algo salio mal en la funcion sendEmail, aqui esta el error: `, error);
        return false;
    }
}

const resetPassword = async (id, token, password, password2) => {

    try {

        const { data: responseData } = await axios.put(uri + `/password-reset/${id}/${token}`, { password, password2 });
        const { ok, message } = responseData;

        console.log(message);

        if (ok)
            return true;
        else
            return false;

    } catch (error) {

        console.error(`Algo salio mal en la funcion resetPassword, aqui esta el error: `, error);
        return false;
    }
}


const finishRegister = async (id, data) => {

    try {

        const { data: responseData } = await axios.put(uri + `/finish-register/${id}`, data);
        const { ok, user } = responseData;

        if (ok && user?.status)
            return true;
        else
            return false;

    } catch (error) {

        console.error(`Algo salio mal en la funcion finishRegister, aqui esta el error: `, error);
        return false;
    }
}

export {
    register,
    login,
    logoutUser,
    sendEmail,
    resetPassword,
    finishRegister
};
