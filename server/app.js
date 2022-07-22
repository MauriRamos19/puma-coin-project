require('dotenv').config()
const Server = require('./models/server')


const server = new Server();
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000", "https://pumacoin-finance.web.app/"]
    })
);

server.listen();

