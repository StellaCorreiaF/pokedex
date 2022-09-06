import listTrainerService from "./TrainerService";
const deleteTrainerService = {
    delete: (id) => {
        const trainerList = listTrainerService.listTrainerService();
        const trainerIndice = listTrainerService.findIndex(item => item.id === Number(id));

        if(trainerIndice ===-1){
            return {erro: "Trainer não existe"}
        }
        trainerList.splice(trainerIndice, 1)

        return { mensagem: "Trainer removido"}
    }
}
export default deleteTrainerService ; 