const axios = require("axios").default;
const uri = 'https://pumacoin-backend.herokuapp.com/api/auth';

const register = async (user) => {
    try {

        const response = await axios.post(uri + '/register', {withCredentials:true,headers: {
            'Access-Control-Allow-Origin': '*'
        }}, user);
        return response.data;

    } catch (error) {

        console.error(`Algo salio mal en la funcion register, aqui esta el error: `, error);

        const { response: { data } } = error;

        return {
            token: null,
            error: data?.err?.message || "Algo salio mal durante el registro"
        }
    }
}

const login = async (user) => {
    try {

        const response = await axios.post(uri + '/login', {withCredentials:true,headers: {
            'Access-Control-Allow-Origin': '*'
        }}, user);
        return response.data;

    } catch ({ response: { data: { ok, err } } }) {

        return {
            error: err.message
        };

    }
}


const requestResetPassword = async (email) => {

    try {

        const { data: responseData } = await axios.post(uri + '/sendEmail', {withCredentials:true,headers: {
            'Access-Control-Allow-Origin': '*'
        }}, { email });
        const { ok, message } = responseData;

        console.log(message, responseData);

        if (ok)
            return true;
        else
            return false;

    } catch (error) {

        console.error(`Algo salio mal en la funcion requestResetPassword, aqui esta el error: `, error);
        return false;
    }
}

const finishRegister = async (id, data) => {

    try {

        const { data: responseData } = await axios.put(uri + `/finish-register/${id}`,{withCredentials:true,headers: {
            'Access-Control-Allow-Origin': '*'
        }}, data);
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
    requestResetPassword,
    finishRegister
};
