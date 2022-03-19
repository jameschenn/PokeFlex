'use strict';
module.exports = (sequelize, DataTypes) => {
  const CatchlistJoinPokemon = sequelize.define('CatchlistJoinPokemon', {
    pokemonId: DataTypes.INTEGER,
    catchlistId: DataTypes.INTEGER
  }, {});
  CatchlistJoinPokemon.associate = function(models) {
    // associations can be defined here
    // CatchlistJoinPokemon.belongsTo(models.Catchlist, { foreignKey: 'catchlistId' })
  };
  return CatchlistJoinPokemon;
};
