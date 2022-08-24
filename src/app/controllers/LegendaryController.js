const LegendaryService = require('../services/LegendaryService'); 

const legendaryController = {
    index: (request, response) => {
        const listLegendaries = LegendaryService.listLegendaryService()
       
        response.json(listLegendaries)

    }, 
    listData: (request, response) => {
        const { name } = request.query; 
        const legendary = LegendaryService.listPokemonData(name);
        response.json(legendary);
    }
}
module.exports = legendaryController; 
