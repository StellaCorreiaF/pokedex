const list = require('../Legendary/LegendaryService');
const updateLegendaryService= {
    update: (
        id,
        name, 
        description,
        type
    ) => {
        const pokemons = list.listLegendaryService();
        const pokemonIndice = pokemons.findIndex(item => item.id === Number(id))
        if(pokemonIndice === -1){
            return { erro: "pokemonIndice não encontrado"}
        }
        pokemons[pokemonIndice] = {
            name,
            description, 
            type
        }
        // para retornar tb o id do pokemon, podemos abrir um objeto e passar o id e depois podemos fazer um rest do pokemons e pegando o indice
        return {
            id, 
            ...pokemons[pokemonIndice]
        }
        
    }
}
module.exports = updateLegendaryService;