'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('CatchlistJoinPokemons', [

      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('CatchlistJoinPokemons', null, {});

  }
};
