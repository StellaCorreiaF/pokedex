const legendaryService = require('../../services/Legendary/LegendaryService'); 
const create = require('../../services/Legendary/CreateLegendaryService');
const update = require('../../services/Legendary/UpdateLegendaryService');
const deleteLegendary = require('../../services/Legendary/DeleteLegendaryService');


const legendaryController = {
    index: (request, response) => {
        const listLegendaries = legendaryService.listLegendaryService()
       
        response.json(listLegendaries)

    }, 
    listData: (request, response) => {
        const { name } = request.query; 
        if(!name){
            return response.status(400).json({"erro" : "Você não informou o nome do pokemon"})
        }
        const legendary = legendaryService.listPokemonData(name);
        response.json(legendary);
    },
    create: (request, response) => {
        const {name, description, type } =  request.body;
        const newLegendary = create.createLegendary(
            name, description, type
        )
        response.json(newLegendary);

    },
    update: (request, response) => {
        const { id } = request.params; 
        const {
            name, 
            description,
            type
        } = request.body;
        const updatedLegendary = update.update(id, name, description, type);
        response.json(updatedLegendary);

        
    },
    delete: (request, response)=> {
        const{ id } = request.params; 
        const deletedLegendary = deleteLegendary.delete(id);
        response.send(deletedLegendary);
    }

}
module.exports = legendaryController; 
