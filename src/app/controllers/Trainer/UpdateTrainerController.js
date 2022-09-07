const update = require('../../services/Trainer/UpdateTrainerService');



class UpdateTrainerController  {
  constructor(){}
  static update (request, response) {
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
export default UpdateTrainerController; 