
import trainerModel from '../../models/TrainerModel';
import { v4} from 'uuid';

const createTrainerService = {
    create: (name, email, password, age) => {
        if (name.length < 5) {
          const createdTrainer = {
            sucess: false,
            message: "Nome precisa ter pelo menos 5 caracteres"
          }
    
          return createdTrainer
        }
    
        if (age < 15 || age >= 40) {
          return {
            sucess: false,
            message: "Somente maiores de 15 e menores de 40 anos podem participar"
          }
        }
    
        const newTrainer = new TrainerModel(v4(), name, email, password, age)
    
        return {
          sucess: true,
          message: newTrainer
        }
      }
}

export default createTrainerService; 