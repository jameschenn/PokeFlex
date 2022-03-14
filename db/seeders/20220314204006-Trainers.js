'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Trainers', [

      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Trainers', null, {});

  }
};
