import trainerModel from "../../models/TrainerModel"

const listTrainerService = {
    listAll: () => {
      const trainers = [
  (   new trainerModel(
       "b2c54ed8-fc80-4b67-a159-81bc0dc30bd7",
        "Stella",
        'stella@gmail.com',
       '12345'), 
       
     new trainerModel (
       "6067d2c0-a80f-460e-b86d-7571c85bec2c",
         "Cristiano",
       'cristiano@gmail.com',
          '123456'
            ))
      ]
  
      return trainers
    },
    findTrainer: (email, password) => {
      const trainer = listTrainerService.listAll().find(trainer => trainer.email === email && trainer.password === password)
  
      return trainer
    }
  }
export default listTrainerService; 