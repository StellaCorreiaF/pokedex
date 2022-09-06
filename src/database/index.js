import { Sequelize } from 'sequelize';
import { TrainerModel } from '../app/models/TrainerModel'

import databaseConfig from '../config/database'

const models = [TrainerModel]  // aqui jogaremos todas as models depois de refatoradas

class Database {
    constructor() {
        this.init()
    }
    init() { // metodo que iniciará a conexão com o banco
        this.connection = new Sequelize(databaseConfig)
        models.map(models => models.init(this.connection)) // vai direcionar as requisições no banco para cada model 
    }
}

//para criar as migrations: npx sequelize migration:create --name=createTrainers
// executar migration:  npx sequelize db:migrate
