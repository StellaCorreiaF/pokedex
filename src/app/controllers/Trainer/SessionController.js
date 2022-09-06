const jwt = require('jsonwebtoken');
const listTrainer  = require('../../services/Trainer/TrainerService');
const controller = require('../Trainer/TrainerController');
const yup = require('yup');

class SessionController{
    constructor (){};
   static create(request, response) {
        const { email, password } = request.body; 

        const trainer = listTrainer.findTrainer(email, password)

        if(!trainer ){
            return response.status(401).json({error : "treinador não encontrado"})
        }
        if(trainer.password !== password){
            return response.status(401).json({error: "password incorreto"})
        } 
        const { id , name } = trainer; 

        return response.json({
            trainer: { id, name, email}, 
            token : jwt.sign({id}, 'a07bda8fd5e39462b4c3d860a36f6b4d', {expiresIn: '5d'})
            
        })


    }

}

module.exports = SessionController; 