const Router= require('express');
const multer = require('multer') 
const multerConfig = require('./config/multer')

const legendaryController = require('./app/controllers/LegendaryController');
const updloadFileController = require('./app/controllers/UploadFileController');
const uploadFile = multer({ storage : multerConfig})


const routes = new Router(); 

routes.get('/legendaries', legendaryController.index); 
routes.get('/legendaries/name', legendaryController.listData);
routes.post('/legendaries', legendaryController.create);
routes.put('/legendaries/:id',legendaryController.update);
routes.delete('/legendaries/:id', legendaryController.delete);


//quando trabalhamos com multer, precisamos de um terceiro parametro, que serve para dizer a requisição quantidade de arquivos q atualizará
routes.post('/uploads', uploadFile.single('file'), updloadFileController.storeFile);


module.exports = routes; 