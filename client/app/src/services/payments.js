const axios = require("axios").default;
// const uri = "https://pumacoin-backend.herokuapp.com/api/payments";
const uri = "http://localhost:8899/api/payments";

export const requestPayment = async (token, pumaCoinAmount) => {

    try {

        const data = {
            amount: pumaCoinAmount,
        }

        const response = await axios.post(uri + "/request-payment", data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const dataResponse = response.data;
        console.log(dataResponse)
        if (!dataResponse.ok || !dataResponse.request || !dataResponse.request?.url) {
            throw new Error("server response with a corrupted data");
        }

        const requestPaymentURL = dataResponse.request.url;
        window.location = requestPaymentURL;

    } catch (error) {

        console.error(`Algo salio mal en la funcion requestPayment, aqui esta el error: `, error);

        const { response: { data } } = error;

        return {
            token: null,
            error: data?.err?.message || "Algo salio al solicitar pagos"
        }
    }
}

export const requestPaymentInfo = async (token, requestID) => {

    try {

        const response = await axios.get(uri + `/request-payment/${requestID}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const dataResponse = response.data;

        if (
            !dataResponse.ok
            || !dataResponse.request
        ) throw new Error("server response with a corrupted data");

        if (
            dataResponse?.request?.status !== "complete"
            || dataResponse?.request?.payment_status !== "paid"
        ) return {
            payment: false
        }

        return {
            payment: true,
            pumaCoinAmount: dataResponse?.request?.pumaCoinAmount
        };

    } catch (error) {

        console.error(`Algo salio mal en la funcion requestPaymentInfo, aqui esta el error: `, error);

        const { response: { data } } = error;

        return {
            token: null,
            error: data?.err?.message || "Algo salicitar informacion de un pago"
        }
    }
}


