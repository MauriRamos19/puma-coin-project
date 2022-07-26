const axios = require("axios").default;
const uri = "https://pumacoin-backend.herokuapp.com/api/support";



const sendEmail = async (data) => {

    try {

        const response = await axios.post(uri, data);
        return response.data;

    } catch (error) {

        console.error(`Algo salio mal en la funcion support, aqui esta el error: `, error);

        const { response: { data } } = error;

        return {
            token: null,
            error: data?.err?.message || "Algo salio mal durante el registro"
        }
    }
}


export {
    sendEmail
};
