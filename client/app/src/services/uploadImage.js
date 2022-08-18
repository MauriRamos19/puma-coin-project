 const axios = require("axios").default;
 const uri = 'https://pumacoin-backend.herokuapp.com/api/auth';
 //const uri = 'http://localhost:8899/api/auth';

 export const uploadImage = async (formData,id) => {
    
        try {
            await axios.post(uri + `/upload/image/${id}`, formData);
        } catch (err) {
            console.error(err);
        }
};

