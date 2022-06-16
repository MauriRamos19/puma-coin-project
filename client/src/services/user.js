const axios = require('axios').default;
const uri = '/api/users';

const putUser = async (user) => {
    try {
        const response = await axios.put(uri + '/' + user.id, user);
        return response.data;
    }
    catch ({ response: { data: { ok, err } } }) {
        return {
            error: err.message
        };
    }
}


module.exports = {
    putUser
}
