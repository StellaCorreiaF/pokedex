import listTrainerService from "../../services/Trainer/TrainerService"

class ListAllTrainnersController {
    constructor(){}
    static listAll (request, response) {
        const trainers = listTrainerService.listAll()
    
        return response.send(trainers)
      }
}
export default ListAllTrainnersController; 