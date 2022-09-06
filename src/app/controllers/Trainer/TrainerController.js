const trainerService = require('../../services/Trainer/TrainerService'); 

const update = require('../../services/Trainer/UpdateTrainerService');
const deleteLegendary = require('../../services/Trainer/DeleteTrainerService');
const createTrainerService = require('../../services/Trainer/CreateTrainerService');



const trainerController = {
    listAll: (request, response) => {
        const trainers = trainerService.listAll()
        return response.send(trainers)
      }, 
    listData: (request, response) => {
        const { name } = request.query; 
        if(!name){
            return response.status(400).json({"erro" : "Você não informou o nome do trainer"})
        }
        const trainer = trainerService.listData(name);
        response.json(trainer);
    },
    create: (request, response) => {
        const {
            name,
            email,
            password           
          } = request.body
            if (!name) {
            return response.status(400).json({
              message: "Nome é obrigatório"
            })
          }

        const createdTrainer = createTrainerService.create(name, email, password, age, city)

            if (!createdTrainer.sucess) {
            return response.status(400).json(createdTrainer.message)
    }
    return response.status(200).json(createdTrainer.message)

    },
    update: (request, response) => {
        const { id } = request.params; 
        const {
            name, 
            email,
            password
        } = request.body;
        const updateTrainer = update.update(id, name, email, password);
        response.json(updateTrainer
);

        
    },
    delete: (request, response)=> {
        const{ id } = request.params; 
        const deletedTrainer = deleteLegendary.delete(id);
        response.send(deletedTrainer);
    }

}
module.exports = trainerController; 
