const Router= require('express');
const multer = require('multer') 
const multerConfig = require('./config/multer')
const legendaryValidator = require('./middlewares/LegendaryValidator');

const legendaryController = require('./app/controllers/LegendaryController');
const trainerController = require('./app/controllers/TrainerController');
const updloadFileController = require('./app/controllers/UploadFileController');
const sessionController = require('./app/controllers/SessionController');
const uploadFile = multer({ storage : multerConfig})


const routes = new Router(); 

routes.get('/legendaries', legendaryController.index); 
routes.get('/legendaries/name', legendaryController.listData);
routes.post('/legendaries', legendaryValidator, legendaryController.create); //o middleware tem q ser alocado sempre como segundo parametro da rota
routes.put('/legendaries/:id',legendaryController.update);
routes.delete('/legendaries/:id', legendaryController.delete);




/*routes.get('/trainer', trainerController.index); 
routes.get('/trainer/name', trainerController.listData);
routes.post('/trainer', trainerController.create); 
routes.put('/trainer/:id',trainerController.update);
routes.delete('/trainer/:id', trainerController.delete);*/
routes.post('/session', sessionController.create );



//quando trabalhamos com multer, precisamos de um terceiro parametro, que serve para dizer a requisição quantidade de arquivos q atualizará
routes.post('/uploads', uploadFile.single('file'), updloadFileController.storeFile);


module.exports = routes; 