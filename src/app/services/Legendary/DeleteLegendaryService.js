const legendaryService = require("./LegendaryService")

const deleteLegendaryService = {
    delete: (id) => {
        const pokemonList = legendaryService.listLegendaryService();
        const pokemonIndice = pokemonList.findIndex(item => item.id === Number(id));

        if(pokemonIndice ===-1){
            return {erro: "Pokemon não existe"}
        }
        pokemonList.splice(pokemonIndice, 1)

        return { mensagem: "Pokemon removido"}
    }
}
module.exports = deleteLegendaryService; 