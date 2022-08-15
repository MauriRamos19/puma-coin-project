import Dotenv from 'dotenv-webpack';
import {} from ''

module.exports = {
  
  plugins: [
    new Dotenv({
        path: '.env',
        systemvars: true
    })
  ]
};