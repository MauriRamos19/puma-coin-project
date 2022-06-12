const axios = require('axios').default;
const uri = '/api/users';

const register = newUser => {
    
    return axios.post(uri, newUser).then( response => response.data );

} 


export default { register }