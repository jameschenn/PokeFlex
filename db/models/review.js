'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.TEXT,
    rating: DataTypes.NUMERIC,
    trainerId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Trainer, { foreignKey: 'trainerId'});
    Review.belongsTo(models.Pokemon, { foreignKey: 'pokemonId'});
  };
  return Review;
};