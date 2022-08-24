const legendaryService = require('../services/LegendaryService'); 
const create = require('../services/CreateLegendaryService');

const legendaryController = {
    index: (request, response) => {
        const listLegendaries = legendaryService.listLegendaryService()
       
        response.json(listLegendaries)

    }, 
    listData: (request, response) => {
        const { name } = request.query; 
        const legendary = legendaryService.listPokemonData(name);
        response.json(legendary);
    },
    create: (request, response) => {
        const {name, description, type } =  request.body;
        const newLegendary = create.createLegendary(
            name, description, type
        )
        response.json(newLegendary);

    }
}
module.exports = legendaryController; 
