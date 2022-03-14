'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Catchlists', [

      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Catchlists', null, {});

  }
};
