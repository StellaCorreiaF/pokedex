const LegendaryModel = require('../../models/LegendaryModel'); 

const legendaryService = {
    listLegendaryService: () => {
        const pokemon = new LegendaryModel
        (1, 'MewTwo', 'Desc', 'pokemon')

        const pokemon2 = new LegendaryModel
        (2, 'Pikachu', 'Desc', 'pokemon')
        return [pokemon, pokemon2]

    },
    listPokemonData: (pokemonName)=> {
        const pokemonList = legendaryService.listLegendaryService();
        const pokemon = pokemonList.find(item => item.name === pokemonName)
        return pokemon; 
    }
}
module.exports = legendaryService; 