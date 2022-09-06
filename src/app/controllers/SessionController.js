const jwt = require('jsonwebtoken');
const listTrainer  = require('../services/TrainerService');
const controller = require('../controllers/TrainerController');
const yup = require('yup');

const sessionController = {
    create(request, response) {
        const { email, password } = request.body; 

        const trainer = listTrainer.findTrainer(email, password)
        if(trainer.password !== password){
            return response.status(401).json({error: "password incorreto"})
        } 
        if(!trainer ){
            return response.status(401).json({error : "treinador não encontrado"})
        }
        
        const { id , name } = trainer; 

        return response.json({
            trainer: { id, name, email}, 
            token : jwt.sign({id}, 'a07bda8fd5e39462b4c3d860a36f6b4d', {expiresIn: '5d'})
            
        })


    }

}

module.exports = sessionController; 