'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Catchlists', [
        { catchstatus: "Wanting to Catch", trainerId: 1, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Trying to Catch", trainerId: 1, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Already Caught", trainerId: 1, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Wanting to Catch", trainerId: 2, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Trying to Catch", trainerId: 2, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Already Caught", trainerId: 2, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Wanting to Catch", trainerId: 3, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Trying to Catch", trainerId: 3, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Already Caught", trainerId: 3, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Wanting to Catch", trainerId: 4, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Trying to Catch", trainerId: 4, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Already Caught", trainerId: 4, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Wanting to Catch", trainerId: 5, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Trying to Catch", trainerId: 5, createdAt: new Date(), updatedAt: new Date() },
        { catchstatus: "Already Caught", trainerId: 5, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Catchlists', null, {});

  }
};
