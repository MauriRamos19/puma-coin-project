
const axios = require("axios").default;
const uri = 'https://pumacoin-backend.herokuapp.com/api';
//const uri = 'http://localhost:8899/api';



export const getUser = async (token) => {

    try {

        const data = await axios.get(uri + '/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        },
        ).then(res => res.data);
        return data;

    } catch (error) {

        console.error(`Algo salio mal en la funcion getInfo, aqui esta el error: `, error);
        return false;
    }
}




export const editUser = async (data,token) => {
        
        try {
            await axios.put(uri + '/user', data ,{withCredentials:true, headers:{

                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data);

        return true;

    } catch (error) {

        console.error(`Algo salio mal en la funcion putInfo, aqui esta el error: `, error);
        return false;
    }
}


export const deleteAccount = async (token) => {

    try {

        const data = await axios.delete(uri + '/user', {
            withCredentials: true, headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data);

        return data;

    } catch (error) {

        console.error(`Algo salio mal en la funcion deleteAccount, aqui esta el error: `, error);
        return false;
    }
}