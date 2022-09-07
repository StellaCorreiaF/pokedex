import listTrainerService from "../../services/Trainer/ListTrainerService";
export default class ListAllTrainersController {
  constructor() {
    this.service = new listTrainerService;
  }

  listAll(request, response) {
    const trainers = this.service.listAll();

    return response.send(trainers);
  }
}