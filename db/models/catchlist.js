'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catchlist = sequelize.define('Catchlist', {
    catchstatus: DataTypes.STRING,
    trainerId: DataTypes.INTEGER
  }, {});
  Catchlist.associate = function (models) {
    // associations can be defined here
    Catchlist.belongsTo(models.Trainer, { foreignKey: 'trainerId' });

    const columnMapping = {
      foreignKey: 'catchlistId',
      through: 'CatchlistJoinPokemon',
      otherKey: 'pokemonId'
    };
    Catchlist.belongsToMany(models.Pokemon, columnMapping);
    Catchlist.hasMany(models.CatchlistJoinPokemon, { foreignKey: 'catchlistId', onDelete: 'CASCADE', hooks: true })
  };
  return Catchlist;
};
