const trainerModel = require('../../models/TrainerModel');
const { v4} = require('uuid');

const createTrainerService = {
    createTrainer: (
       name, 
       email, 
       password
    ) => {
        const newTrainer = new trainerModel(
        v4(),
        name,
        email, 
        password   
        );
    
        return newTrainer;
       
    }  
}

module.exports = createTrainerService; 