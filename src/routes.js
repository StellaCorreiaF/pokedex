const Router= require('express'); 
const legendaryController = require('./app/controllers/LegendaryController');

const routes = new Router(); 

routes.get('/legendaries', legendaryController.index); 
routes.get('/legendaries/name', legendaryController.listData);
routes.post('/legendaries', legendaryController.create);
routes.put('/legendaries/:id',legendaryController.update);
routes.delete('/legendaries/:id', legendaryController.delete);
module.exports = routes; 