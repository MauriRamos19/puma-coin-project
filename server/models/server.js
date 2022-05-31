const express = require('express');
const { dbConnection } = require('../database/config')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT

        this.dbConnect();

        this.middlewares();
    }

    dbConnect = async() => {
        await dbConnection()
    }

    middlewares () {
        this.app.use(cors());
        this.app.use( express.json() )
    }

    listen () {
        this.app.listen(this.port);
    }

}

module.exports = Server