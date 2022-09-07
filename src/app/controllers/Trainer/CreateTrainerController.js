import createTrainerService from "../../services/Trainer/CreateTrainerService"

class CreateTrainerController {

    constructor() {}

   static create(request, response) {
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

        const createdTrainer = createTrainerService.create(name, email, password, age)

        if (!createdTrainer.sucess) {
            return response.status(400).json(createdTrainer.message)
        }

        return response.status(200).json(createdTrainer.message)
    }
}

export default CreateTrainerController; 