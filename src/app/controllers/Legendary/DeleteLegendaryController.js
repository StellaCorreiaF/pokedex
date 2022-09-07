import deleteLegendaryService from "../../services/Legendary/DeleteLegendaryService";

class DeleteLegendaryController {
    constructor() { }
    static delete(request, response) {
        const { id } = request.params;
        const deletedLegendary = deleteLegendaryService.delete(id)
        response.send(deletedLegendary);
    }
}
export default DeleteLegendaryController; 