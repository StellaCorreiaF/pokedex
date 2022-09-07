import createLegendaryService from "../../services/Legendary/CreateLegendaryService";

class CreateLegendaryController {
    constructor(){}
    static create (request, response) {
        const {name, description, type } =  request.body;
        const newLegendary = createLegendaryService.createLegendary(
            name, description, type
        )
        response.json(newLegendary);

    }
}
export default CreateLegendaryController; 