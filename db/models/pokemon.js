'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: DataTypes.STRING,
    biology: DataTypes.TEXT
  }, {});
  Pokemon.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'pokemonId',
      through: 'CatchlistJoinPokemon',
      otherKey: 'catchlistId'
    }
    Pokemon.belongsToMany(models.Catchlist, columnMapping)

    Pokemon.hasMany(models.Review, {foreignKey: 'pokemonId'})
  };
  return Pokemon;
};
