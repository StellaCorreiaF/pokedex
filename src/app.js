const express = require('express'); 
class App {
    constructor(){
        this.server = express(); 

    }
    middlewares() {
        this.server.use(express.json());

    }
    routes(){
        this.server.use(this.routes);

    }
}
module.exports = new App().server; 
//dentro da classe, so estou exportando o server, que é quem roteia o express