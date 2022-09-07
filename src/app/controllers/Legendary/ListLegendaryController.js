import legendaryService from "../../services/Legendary/LegendaryService";

class ListLegendaryController{
    constructor(){}
  static  index (request, response) {
        const listLegendaries = legendaryService.listLegendaryService()
       
        response.json(listLegendaries)

    } 
   static listData (request, response) {
        const { name } = request.query; 
        if(!name){
            return response.status(400).json({"erro" : "Você não informou o nome do pokemon"})
        }
        const legendary = legendaryService.listPokemonData(name);
        response.json(legendary);
    }
    
}
export default ListLegendaryController; 