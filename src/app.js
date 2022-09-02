const express = require('express'); 
const routes = require('./routes');

class App {
    constructor(){
        this.server = express(); 
        this.middlewares();
        this.routes();
        

    }
    middlewares() {
        this.server.use(express.json());
        //middlewares interceptam as requisições do express para que o express possa interpretá-las
        

    }
    routes(){
        this.server.use(routes);
        // rotas são os métodos http
    }
}
module.exports = new App().server;