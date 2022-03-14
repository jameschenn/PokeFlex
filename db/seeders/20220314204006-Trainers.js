'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Trainers', [
        {
          username: 'demouser',
          password: '2022Testinglogin',
          emailAddress: 'demotesting.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'James Chen',
          password: 'Mrcoolguyrighthere02',
          emailAddress: 'jamesstillusesaol@aol.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Grant Walton',
          password: '03Smartest18yearsoldever',
          emailAddress: 'whatisahotmailtogrant@hotmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Khoi Duong',
          password: 'HoodieKhoibuiltdifferently04',
          emailAddress: 'firstsmartguytousegoogleever@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Dayton Chen',
          password: '05Itsweek13andhebarelyknowsjavascript',
          emailAddress: 'daytonmissesoldyahoo@yahoo.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Trainers', null, {});

  }
};
