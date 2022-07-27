const axios = require("axios").default;
const uri = "https://pumacoin-backend.herokuapp.com/api/password-reset";
/* const uri = "http://localhost:3000/api"; */

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