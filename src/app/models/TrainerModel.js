import Sequelize, { Model } from 'sequelize'
class TrainerModel extends Model {
    static init(sequelize) {
        super.init({
            id: Sequelize.UUIDV4(),
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING

        }, {
           sequelize 
        })

    }
}

/*function trainerModel(id, name, email, password){
    this.id= id; 
    this.name = name;
    this.email = email; 
    this.password = password; 
}

module.exports = trainerModel; */

export { TrainerModel }

