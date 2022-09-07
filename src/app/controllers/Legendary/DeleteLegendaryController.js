import deleteLegendaryService from "../../services/Legendary/DeleteLegendaryService";

export default class DeleteLegendaryController {
    constructor() {
      this.service = new deleteLegendaryService();
    }
  
    delete(request, response) {
      const { id } = request.params;
  
      const resultado = this.service.delete(id);
  
      response.send(resultado);
    }
  }