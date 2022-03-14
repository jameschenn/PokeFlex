'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('CatchlistJoinPokemons', [
        { pokemonId: 21, catchlistId: 1, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 131, catchlistId: 1, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 42, catchlistId: 1, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 11, catchlistId: 1, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 78, catchlistId: 1, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 89, catchlistId: 2, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 101, catchlistId: 2, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 151, catchlistId: 2, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 1, catchlistId: 2, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 7, catchlistId: 2, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 63, catchlistId: 2, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 99, catchlistId: 3, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 87, catchlistId: 3, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 64, catchlistId: 3, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 126, catchlistId: 3, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 8, catchlistId: 3, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 24, catchlistId: 3, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 32, catchlistId: 3, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 6, catchlistId: 4, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 148, catchlistId: 4, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 101, catchlistId: 5, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 53, catchlistId: 5, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 49, catchlistId: 6, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 25, catchlistId: 6, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 91, catchlistId: 7, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 11, catchlistId: 7, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 13, catchlistId: 8, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 146, catchlistId: 8, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 3, catchlistId: 9, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 10, catchlistId: 9, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 11, catchlistId: 10, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 80, catchlistId: 10, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 72, catchlistId: 11, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 66, catchlistId: 11, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 23, catchlistId: 12, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 35, catchlistId: 12, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 52, catchlistId: 13, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 140, catchlistId: 13, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 144, catchlistId: 13, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 100, catchlistId: 14, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 16, catchlistId: 14, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 12, catchlistId: 15, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 88, catchlistId: 15, createdAt: new Date(), updatedAt: new Date() },
        { pokemonId: 2, catchlistId: 15, createdAt: new Date(), updatedAt: new Date() }
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('CatchlistJoinPokemons', null, {});

  }
};
