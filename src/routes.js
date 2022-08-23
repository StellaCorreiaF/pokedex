const Router= require('express'); 
const legendaryController = require('./app/controllers/LegendaryController');

const routes = new Router(); 

routes.get('/legendaries', legendaryController.index); 

module.exports = routes; 