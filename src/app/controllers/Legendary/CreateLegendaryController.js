import createLegendaryService from "../../services/Legendary/CreateLegendaryService";

export default class CreateLegendaryController {
    constructor() {
      this.service = new createLegendaryService();
    }
  
    create(request, response) {
      const {
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense,
      } = request.body;
  
      const legendary = this.service.create(
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense
      );
  
      return response.json(legendary);
    }}