import updateLegendaryService from "../../services/Legendary/UpdateLegendaryService";

class UpdateLegendaryController {
    constructor(){}
   static update(request, response) {
        const { id } = request.params; 
        const { name, description, type}  = request.body;
        const updatedLegendary = updateLegendaryService.update(name, description, type)
        response.json(updatedLegendary);

    }
}
export default UpdateLegendaryController; 