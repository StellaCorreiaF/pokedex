'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('trainers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull : false,
        primaryKey: true
      }, 
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      age: {
        type: Sequelize.SMALLINT,
        allowNull: false

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }


    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trainers');

  }
};
