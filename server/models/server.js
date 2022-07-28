const express = require('express');
var cors = require('cors')
const { dbConnection } = require('../database/config')

var cookieParser = require('cookie-parser')
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.paths = {
            auth: "/api/auth",
            passwordReset: "/api/password-reset",
            account: "/api/settings/account",
            support: "/api/support"
        }

        this.dbConnect();

        this.middlewares();

        this.routes()
    }

    dbConnect = async () => {
        await dbConnection()
    }

    middlewares() {
        this.app.use(cors({
            origin: ["http://localhost:3000", "https://pumacoin-finance.web.app", "https://api.devnet.solana.com"],
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
            exposedHeaders: ['Content-Type', 'Authorization', 'Accept'],
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204,
        }));
        this.app.use(express.json())
        this.app.use(cookieParser());
    }

    routes = () => {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.passwordReset, require('../routes/passwordReset'));
        this.app.use(this.paths.account, require('../routes/account'));
        this.app.use(this.paths.support, require('../routes/support'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server up on port: ", this.port)
        });
    }

}

module.exports = Server