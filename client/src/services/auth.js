const axios = require("axios").default;
const uri = process.env.REACT_APP_API_URL;

const register = async (user) => {
  const response = await axios.post(uri + "/auth/register", user);
  return response.data;
};

const login = async (user) => {
  console.log(user);
  const response = await axios.post(uri + "/auth/login", user);
  return response.data;
};

export { register, login };
