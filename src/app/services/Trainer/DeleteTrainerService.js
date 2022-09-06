const trainerService = require("./TrainerService")

const deleteTrainerService = {
    delete: (id) => {
        const trainerList = trainerService.listTrainerService();
        const trainerIndice = trainerList.findIndex(item => item.id === Number(id));

        if(trainerIndice ===-1){
            return {erro: "Trainer não existe"}
        }
        trainerList.splice(trainerIndice, 1)

        return { mensagem: "Trainer removido"}
    }
}
module.exports = deleteTrainerService ; 