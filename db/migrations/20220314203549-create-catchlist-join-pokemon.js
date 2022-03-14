'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CatchlistJoinPokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pokemonId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pokemons'}
      },
      catchlistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Catchlists'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CatchlistJoinPokemons');
  }
};
