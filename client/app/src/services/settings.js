
const axios = require("axios").default;
const uri = "https://pumacoin-backend.herokuapp.com/api/password-reset";




export const getInfoAccount = async () => {
    
        try {
    
            const data = await axios.get(uri + '/settings/account',{withCredentials:true}).then(res => res.data);
          
            return data;
    
        } catch (error) {
    
            console.error(`Algo salio mal en la funcion getInfo, aqui esta el error: `, error);
            return false;
        }
}



export const putInfoAccount = async (user) => {
        
        try {
            
            console.log(user)
            await axios.put(uri + '/settings/account', user,{withCredentials:true}).then(res => res.data);

            return true;
                
        } catch (error) {
        
            console.error(`Algo salio mal en la funcion putInfo, aqui esta el error: `, error);
            return false;
        }
}


export const deleteAccount = async () => {
        
        try {
    
            const data = await axios.delete(uri + '/settings/account',{withCredentials:true}).then(res => res.data);
        
            return data;
    
        } catch (error) {
    
            console.error(`Algo salio mal en la funcion deleteAccount, aqui esta el error: `, error);
            return false;
        }
}