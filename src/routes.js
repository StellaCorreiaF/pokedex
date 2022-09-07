//const Router= require('express');  - Refatorando, import
import Router from 'express';
import multer from 'multer';
import CreateLegendaryController from './app/controllers/Legendary/CreateLegendaryController';
import DeleteLegendaryController from './app/controllers/Legendary/DeleteLegendaryController';
import ListLegendaryController from './app/controllers/Legendary/ListLegendaryController';
import UpdateLegendaryController from './app/controllers/Legendary/UpdateLegendaryController';
import CreateTrainerController from './app/controllers/Trainer/CreateTrainerController';
import ListAllTrainnersController from './app/controllers/Trainer/ListAllTrainersController';
import SessionController from './app/controllers/Trainer/SessionController';
import UpdateTrainerController from './app/controllers/Trainer/UpdateTrainerController';
import multerConfig from './config/multer';
import legendaryValidator from './middlewares/LegendaryValidator';



const updloadFileController = require('./app/controllers/UploadFileController');
const uploadFile = multer({ storage : multerConfig})


const routes = new Router(); 

routes.get('/legendaries', ListLegendaryController.index); 
routes.get('/legendaries/name', ListLegendaryController.listData);
routes.post('/legendaries', legendaryValidator, CreateLegendaryController.create); //o middleware tem q ser alocado sempre como segundo parametro da rota
routes.put('/legendaries/:id',UpdateLegendaryController.update);
routes.delete('/legendaries/:id', DeleteLegendaryController.delete);



routes.get('/trainer/name', ListAllTrainnersController.listAll);
routes.post('/trainer', CreateTrainerController.create); 
routes.put('/trainer/:id',UpdateTrainerController.update);



routes.post('/session', SessionController.create );



//quando trabalhamos com multer, precisamos de um terceiro parametro, que serve para dizer a requisição quantidade de arquivos q atualizará
routes.post('/uploads', uploadFile.single('file'), updloadFileController.storeFile);


module.exports = routes; 