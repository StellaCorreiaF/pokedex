import LegendaryModel from "../../models/LegendaryModel";

export default class DeleteLegendaryService {
  constructor() {}

  async delete(id) {
    try {
      const pokemon = await LegendaryModel.findByPk(id);

      if (!pokemon) {
        return { mensagem: "Pokémon não encontrado" };
      }

      const pokemonDeletado = await pokemon.destroy();

      return pokemonDeletado;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}