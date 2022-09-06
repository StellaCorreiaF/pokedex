const trainerService = require('../../services/Trainer/TrainerService');

const update = require('../../services/Trainer/UpdateTrainerService');
const deleteLegendary = require('../../services/Trainer/DeleteTrainerService');
const createTrainerService = require('../../services/Trainer/CreateTrainerService');



class TrainerController  {
  constructor(){}
  listAll (request, response) {
    const trainers = trainerService.listAll()

    return response.send(trainers)
  }
  create (request, response) {
    const {
      name,
      email,
      password,
      age
    } = request.body

    if (!name) {
      return response.status(400).json({
        message: "Nome é obrigatório"
      })
    }

    if (!age) {
      return response.status(400).json({
        message: "Idade é obrigatório"
      })
    }

    const createdTrainer = CreateTrainerService.create(name, email, password, age)

    if (!createdTrainer.sucess) {
      return response.status(400).json(createdTrainer.message)
    }

    return response.status(200).json(createdTrainer.message)
  }
  update (request, response) {
    const { id } = request.params
    const {
      name,
      age
    } = request.body

    if (!name) {
      return response.status(400).json({
        message: "Nome é obrigatório"
      })
    }

    if (!age) {
      return response.status(400).json({
        message: "Idade é obrigatório"
      })
    }

    const updatedTrainer = UpdateTrainerService.update(id, name, age, city)

    if (!updatedTrainer.sucess) {
      return response.status(400).json(updatedTrainer.message)
    }

    return response.status(200).json(updatedTrainer.message)
  }
}
module.exports = TrainerController; 
