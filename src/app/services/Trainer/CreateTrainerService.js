
import trainerModel from '../../models/TrainerModel';
import { v4} from 'uuid';

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

export default createTrainerService; 