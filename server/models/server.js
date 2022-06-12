const express = require('express');
var cors = require('cors')
const { dbConnection } = require('../database/config')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.paths = {
            users: "/api/users",
            auth: "/api/auth"
        }

        this.dbConnect();

        this.middlewares();

        this.routes()
    }

    dbConnect = async() => {
        await dbConnection()
    }

    middlewares () {
        this.app.use(cors());
        this.app.use( express.json() )
    }

    routes = () => {
        this.app.use(this.paths.users,require('../routes/users'));
        this.app.use(this.paths.auth,require('../routes/auth'));
    }

    listen () {
        this.app.listen(this.port);
    }

}

module.exports = Server