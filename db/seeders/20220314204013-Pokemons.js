'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pokemons', [

      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pokemons', null, {});
  }
};
