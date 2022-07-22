const axios = require("axios").default;
const uri = "/api/password-reset";

const resetPassword = async (id, token, password, password2) => {

    try {

        const { data: responseData } = await axios.put(uri + `/${id}/${token}`, { password, password2 });
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

export {
    resetPassword
}