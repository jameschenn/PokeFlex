'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define('Trainer', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  }, {});
  Trainer.associate = function(models) {
    // associations can be defined here
    Trainer.hasMany(models.Catchlist, { foreignKey: 'trainerId', onDelete: 'CASCADE', hooks: true });
    Trainer.hasMany(models.Review, { foreignKey: 'trainerId' });
  };
  return Trainer;
};
