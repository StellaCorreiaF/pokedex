const Router= require('express'); 
const legendaryController = require('./app/controllers/LegendaryController');

const routes = new Router(); 

routes.get('/legendaries', legendaryController.index); 
routes.get('/legendaries/name', legendaryController.listData);

module.exports = routes; 