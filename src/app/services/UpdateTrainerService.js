const list = require('../services/TrainerService');
const updateTrainerService= {
    update: (
        id,
        name, 
        email,
        password
    ) => {
        const trainers = list.listTrainerService();
        const trainerIndice = trainers.findIndex(item => item.id === Number(id))
        if(trainerIndice === -1){
            return { erro: "Trainer não encontrado"}
        }
        trainers[trainerIndice] = {
            name,
            email, 
            password
        }
        // para retornar tb o id do pokemon, podemos abrir um objeto e passar o id e depois podemos fazer um rest do trainers e pegando o indice
        return {
            id, 
            ...trainers[trainerIndice]
        }
        
    }
}
module.exports = updateTrainerService;